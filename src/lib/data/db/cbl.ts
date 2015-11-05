///<reference path="typedefs/cblsubtypes.d.ts" />

import Emitter = require('lib/data/db/cblemitter');

class cblDB {

    dbName = '';
    replicate = null;

    static eventTypes = {
        active: 'active', change: 'change', complete: 'complete', denied: 'denied', error: 'error', paused: 'paused'
    };

    private dbUrl:string = '';
    private serverUrl = '';

    constructor(dbName:string) {
        this.dbName = dbName.replace(/[^a-z0-9$_()+-/]/g, '');

        this.replicate = {
            from: this.replicateFrom,
            to: this.replicateTo
        }
    }

    initDB() {
        return new Promise((resolve, reject)=> {
            //get cbl server url
            cbl.getServerURL(
                (url)=> {
                    this.serverUrl = url;
                    this.dbUrl = new URI(this.serverUrl).directory(this.dbName).toString();
                    this.processRequest('PUT', this.dbUrl.toString(), null, null,
                        (err, response)=> {
                            if (response.status = 412) resolve(true);
                            else if (response.ok) resolve(true);
                            else if (err) reject(cblDB.buildError('Error From DB PUT Request', err));
                            else reject(cblDB.buildError('Unknown Error From DB PUT Request', response));
                        });
                },
                (err)=> {throw new Error(err); });
        });
    }

    allDocs(params:cbl.IAllDocsParams) {
        return new Promise((resolve, reject)=> {
            var verb = 'GET';
            var requestParams:cbl.IGetPostDbDesignViewName = <cbl.IGetPostDbDesignViewName>{};
            if (_.isArray(params.keys)) {
                verb = 'POST';
                requestParams.keys = params.keys;
            }
            else requestParams = <cbl.IGetPostDbDesignViewName>_.assign(requestParams, params);

            var uri = new URI(this.dbUrl).search(requestParams);
            this.processRequest(verb, uri.toString(), null, null,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From allDocs Request', err));
                    else resolve(success);
                });
        });
    }

    bulkDocs(docs:Array<cbl.IDoc>) {
        return new Promise((resolve, reject)=> {
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var uri = new URI(this.dbUrl).segment('_bulk_docs');
            this.processRequest('POST', uri.toString(), docs, headers,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From bulkDocs Request', err));
                    else resolve(success);
                })
        });
    }

    changes(params?:cbl.IGetDbChangesParams):Emitter {
        if(!params)params = {feed:'eventsource'};
        else params.feed = 'eventsource';
        var emitter = new Emitter();
        var uri = new URI(this.dbUrl).segment('_changes').search(params);
        var source = new EventSource(uri.toString());
        source.onerror = (e) => { emitter.emit('error', JSON.parse(e.data)); };
        source.onmessage = (e) => {emitter.emit('change', JSON.parse(e.data)); };
        emitter.cancel = () =>{
            source.close();
            emitter.emit('complete');
            emitter.removeAllListeners();
        };
        return emitter;
    }

    compact() {
        return new Promise((resolve, reject)=> {
            var uri = new URI(this.dbUrl).segment('_compact');
            this.processRequest('POST', uri.toString(), null, null,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From bulkDocs Request', err));
                    else resolve(success);
                });
        });
    }

    destroy() {
        return new Promise((resolve, reject)=> {
            var uri = new URI(this.dbUrl);
            this.processRequest('DELETE', uri.toString(), null, null,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From bulkDocs Request', err));
                    else resolve(success);
                });
        });
    }

    get(docId:string, params?:cbl.IGetDbDocParams) {
        return new Promise((resolve, reject)=> {
            var headers:cbl.IHeaders = {'Accept': 'application/json'};
            var uri = new URI(this.dbUrl).segment(docId);
            var requestParams:cbl.IGetDbDocParams = <cbl.IGetDbDocParams>{};
            if (params) {
                requestParams = <cbl.IGetDbDocParams>_.assign(requestParams, params);
                uri.search(requestParams);
            }
            this.processRequest('GET', uri.toString(), null, headers,
                (err, doc)=> {
                    if (err) reject(cblDB.buildError('Error From GET Request', err));
                    else resolve(doc);
                });
        });
    }

    getAttachment(docId:string, attachmentName:string, params?:cbl.IBatchRevParams) {
        return new Promise((resolve, reject)=> {
            var uri:uri.URI = new URI(this.dbUrl).segment(docId).segment(attachmentName);
            if (params.rev) uri.search({rev: params.rev});

            this.processRequest('GET', uri.toString(), null, null,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From bulkDocs Request', err));
                    else resolve(success);
                }, true);
        });
    }

    info() {
        return new Promise((resolve, reject)=> {
            this.processRequest('GET', this.dbUrl, null, null, (err, info)=> {
                if (err) reject(cblDB.buildError('Error From db info Request', err));
                else resolve({db_name: info.db_name, doc_count: info.doc_count, update_seq: info.update_seq});
            });
        });
    }

    post(doc:cbl.IDoc, params?:cbl.IPostDbDocParams) {
        return new Promise((resolve, reject)=> {
            var uri = new URI(this.dbUrl);
            if (params.batch === 'ok') uri.search({batch: 'ok'});
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            this.processRequest('POST', uri.toString(), doc, headers,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From POST Doc Request', err));
                    else resolve(success);
                });
        });
    }


    put(doc:cbl.IDoc, params?:cbl.IBatchRevParams) {
        return new Promise((resolve, reject)=> {
            if (!doc._id) reject(cblDB.buildError('doc does not have _id for PUT request', doc));
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var requestParams:cbl.IBatchRevParams = <cbl.IBatchRevParams>{};
            if (!params.rev) requestParams.rev = doc._rev;
            if (params) requestParams = <cbl.IBatchRevParams>_.assign(requestParams, params);

            var uri = new URI(this.dbUrl).segment(doc._id).search(requestParams);
            this.processRequest('PUT', uri.toString(), doc, headers,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From PUT Request: ensure doc or params is providing the rev if updating a doc', err));
                    else resolve(success);
                });
        });
    }

    putAttachment(docId:string, attachmentId:string, attachment:any, mimeType:string, rev?:string) {
        return new Promise((resolve, reject)=> {
            var headers:cbl.IHeaders = {'Content-Type': mimeType};
            var uri = new URI(this.dbUrl).segment(docId).segment(attachmentId);
            if (rev) uri.search({rev: rev});
            this.processRequest('PUT', uri.toString(), attachment, headers,
                (err, success)=> {
                    if (err) reject(cblDB.buildError('Error From PUT Attachment Request, if document exists ensure the rev is provided', err));
                    else resolve(success);
                }, true);
        });
    }

    query(view:string, params:cbl.IGetPostDbDesignViewName) {
        return new Promise((resolve, reject)=> {
            var verb = 'GET';
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var viewParts = view.split('/');
            var requestParams:cbl.IGetPostDbDesignViewName = <cbl.IGetPostDbDesignViewName>{};
            if (params.keys) {
                verb = 'POST';
                requestParams.keys = params.keys;
            }
            else requestParams = <cbl.IGetPostDbDesignViewName>_.assign(requestParams, params);
            var uri = new URI(this.dbUrl).segment('_design').segment(viewParts[0]).segment('_view').segment(viewParts[1]).search(requestParams);
            this.processRequest(verb, uri.toString(), null, headers,
                (err, response)=> {
                    if (err) reject(cblDB.buildError('Error From Query Request', err));
                    else resolve(response);
                });
        });
    }

    private replicateFrom(otherDB:string, params?:cbl.IPostReplicateParams):Emitter | Promise<{}> {
        params = {source: this.dbName, target: otherDB};
        var uri = new URI(this.serverUrl).segment('_replicate');
        return this.replicationRequest(params, 'replicator.from', 'POST', uri.toString());
    }

    private replicateTo(otherDB:string, params?:cbl.IPostReplicateParams):Emitter | Promise<{}> {
        params = {source: otherDB, target: this.dbName};
        var uri = new URI(this.serverUrl).segment('_replicate');
        return this.replicationRequest(params, 'replicator.to', 'POST', uri.toString());
    }

    remove(doc:cbl.IDoc, params?:cbl.IBatchRevParams) {
        return new Promise((resolve, reject)=> {
            var verb = 'DELETE';
            var requestParams:cbl.IBatchRevParams = <cbl.IBatchRevParams>{};
            if (params) requestParams = <cbl.IGetPostDbDesignViewName>_.assign(requestParams, params);
            if (!params.rev) requestParams.rev = doc._rev;

            var uri = new URI(this.dbUrl).segment(doc._id).search(requestParams);
            this.processRequest(verb, uri.toString(), null, null,
                (err, response)=> {
                    if (err) reject(cblDB.buildError('Error From remove Request', err));
                    else resolve(response);
                });
        });
    }

    removeAttachment(docId:string, attachmentId:string, rev:string) {
        return new Promise((resolve, reject)=> {
            var verb = 'DELETE';
            var uri = new URI(this.dbUrl).segment(docId).segment(attachmentId).search({rev: rev});
            this.processRequest(verb, uri.toString(), null, null,
                (err, response)=> {
                    if (err) reject(cblDB.buildError('Error From remove Request', err));
                    else resolve(response);
                });
        });
    }

    revsDiff() {
        return new Promise((resolve, reject)=> {
            reject(cblDB.buildError('revsDiff not implemented yet'));
            /** TODO: NEEDS IMPLEMENTATION */
        });
    }

    upsert(doc:cbl.IDoc, params?:cbl.IBatchRevParams) {
        return new Promise((resolve, reject)=> {
            var put = (upsertDoc) => {
                if (!upsertDoc._id) reject(cblDB.buildError('doc does not have _id for Upsert request', doc));
                this.processRequest('PUT', uri.toString(), upsertDoc, headers,
                    (err, success)=> {
                        if (err) reject(cblDB.buildError('Error From Upsert Request', err));
                        else resolve(success);
                    });
            };

            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var uri = new URI(this.dbUrl).segment(doc._id);
            var requestParams:cbl.IBatchRevParams = <cbl.IBatchRevParams>{};
            if (params) {
                requestParams = <cbl.IBatchRevParams>_.assign(requestParams, params);
                uri.search(requestParams);
            }

            this.get(doc._id)
                .then((dbDoc:cbl.IDoc)=> {
                    requestParams.rev = dbDoc._rev;
                    doc._rev = dbDoc._rev;
                    uri.search(requestParams);
                    put(doc);
                })
                .catch((error)=> {
                    if (error.status === 404) put(doc);
                    else return error;
                });
        });
    }

    viewCleanup() {
        return new Promise((resolve, reject)=> {
            reject(cblDB.buildError('viewCleanup not implemented yet'));
            /** TODO: NEEDS IMPLEMENTATION */
        });
    }

    private static buildError(msg:string, err?) {
        var error:any = new Error(msg);
        if (_.isObject(err))error = _.assign(error, err);
        else if (err) error.errorValue = err;
        return error;
    }

    private processRequest(verb:string, url:string, data:Object, headers:Object, cb:Function, isAttach?:boolean):void {
        var http = new XMLHttpRequest();
        http.open(verb, url, true);
        if (headers) _.forOwn(headers, (value, key)=> { http.setRequestHeader(key, value); });
        if (isAttach)http.responseType = 'blob'; //options "arraybuffer", "blob", "document", "json", and "text"

        //state change callback
        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status >= 200 && http.status <= 299) {
                if (isAttach) cb(false, http.response);
                else cb(false, JSON.parse(http.responseText));
            }
            else if (http.readyState == 4 && http.status >= 300) cb({status: http.status, response: http.responseText});
        };

        //send request variations
        if (verb === 'PUT' && isAttach) http.send(data);
        else if (verb === 'GET' || verb === 'DELETE')http.send();
        else if (verb === 'POST' || verb === 'PUT' && !_.isNull(data))http.send(JSON.stringify(data));
        else http.send();
    }

    private replicationRequest(params:cbl.IPostReplicateParams, verb:string, uri:string, source:string):Emitter | Promise<{}> {
        var emitter = new Emitter();
        var http = new XMLHttpRequest();
        emitter.cancel(()=> {
            emitter.emit('complete');
            emitter.removeAllListeners();
            if (params.continuous) {this.cancelReplication(emitter.cancelId)}
        });

        //TODO : use _active_tasks end point to handle active, pause events

        http.open(verb, uri, true);
        var fromPromise = new Promise((resolve, reject)=> {
            //state change callback
            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status >= 200 && http.status <= 299) {
                        var response:cbl.IPostReplicateResposne = JSON.parse(http.responseText);
                        emitter.cancelId = response.session_id;
                        if (params.continuous) emitter.emit(cblDB.eventTypes.change, JSON.parse(http.responseText));
                        else emitter.emit(cblDB.eventTypes.complete, JSON.parse(http.responseText));
                        resolve(response);
                    }
                    else if (http.status === 401 || http.status === 403) {
                        emitter.emit(cblDB.eventTypes.denied, {status: http.status, response: http.responseText});
                        reject(cblDB.buildError('Denied From ' + source + ' request', {
                            status: http.status,
                            response: http.responseText
                        }));
                    }
                    else if (http.status === 400 || http.status >= 404) {
                        emitter.emit(cblDB.eventTypes.error, {status: http.status, response: http.responseText});
                        reject(cblDB.buildError('Error From ' + source + ' request', {
                            status: http.status,
                            response: http.responseText
                        }));
                    }
                }
                else if (http.readyState !== 0 && http.readyState !== 1 && http.readyState !== 2 && http.readyState !== 3) {
                    reject(cblDB.buildError('Unknown Error From ' + source + ' request', {
                        status: http.status,
                        response: http.responseText
                    }));
                }
            };
            http.send(JSON.stringify(params));
        });
        return < Emitter | Promise<{}> >_.merge(emitter, fromPromise);
    }

    private cancelReplication(cancelId:string) {
        var uri = new URI(this.serverUrl).segment('_replicate');
        var http = new XMLHttpRequest();
        http.open('POST', uri.toString(), true);
        http.send(JSON.stringify({replication_id: cancelId, cancel: true}));
    }
}

export = cblDB;