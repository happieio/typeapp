///<reference path="cbl.d.ts" />

import Emitter = require('emitter');

class cblDB {

    private serverUrl = '';
    private dbName = '';
    private dbUrl:uri.URI = null;
    replicate = null;

    constructor(dbName) {
        this.dbName = dbName;
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
                    this.dbUrl = new URI(this.serverUrl);
                    this.dbUrl.directory(this.dbName);
                    this.processRequest('PUT', this.dbName, null, null,
                        (err, response)=> {
                            if (err) reject(err);
                            else if (response.ok) resolve(true);
                            else if (response.status = 412) resolve(true);
                            else reject(response);
                        });
                },
                (err)=> {throw new Error(err); });
        });
    }

    bulkDocs(docs:Array<cbl.IDoc>) {
        return new Promise((resolve, reject)=> {
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var uri = this.dbUrl.directory('_bulk_docs');
            this.processRequest('POST', uri.toString(), docs, headers, (err, success)=> { if (err)reject(err); else resolve(success); })
        });
    }

    changes() {
        var http = new XMLHttpRequest();
        var emitter = new Emitter();
        var uri = this.dbUrl.directory('_changes');
        http.onreadystatechange = () => {
            //if (http.readyState == 4 && http.status == 200) change(false, JSON.parse(http.responseText));
            //else error({status: http.status, response: http.responseText});
        };

        //http.open(verb, uri.toString(), true);
        //if (verb === 'GET' || verb === 'DELETE')http.send();
        //else if (verb === 'POST' || verb === 'PUT')http.send(JSON.stringify(data));
        return emitter;
    }

    destroy() {
        return new Promise((resolve, reject)=> {

        });
    }

    get(docId:string, params?:cbl.IGetDbDocParams) {
        return new Promise((resolve, reject)=> {
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var uri = this.dbUrl.directory(docId);
            var requestParams:cbl.IGetDbDocParams = <cbl.IGetDbDocParams>{};
            if (params) requestParams = <cbl.IGetDbDocParams>_.assign(requestParams, params);
            this.processRequest('GET', uri.toString(), null, headers, (err, doc)=> { if (err) reject(err); else resolve(doc); });
        });
    }

    info() {
        return new Promise((resolve, reject)=> {

        });
    }

    query(view:string, params:cbl.IGetPostDbDesignViewName) {
        return new Promise((resolve, reject)=> {
            var verb = 'GET';
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var viewParts = view.split('/');
            var uri = this.dbUrl.directory('_design').directory(viewParts[0]).directory('_view').directory(viewParts[1]);
            var requestParams:cbl.IGetPostDbDesignViewName = <cbl.IGetPostDbDesignViewName>{};
            if (params.keys) {
                verb = 'POST';
                requestParams.keys = params.keys;
            }
            else requestParams = <cbl.IGetPostDbDesignViewName>_.assign(requestParams, params);
            uri.search(requestParams);

            this.processRequest(verb, uri.toString(), null, headers, (err, response)=> {if (err)reject(err); else resolve(response); });
        });
    }

    replicateFrom() {

    }

    replicateTo() {

    }

    upsert(doc:cbl.IDoc, params?:cbl.IPutDbDocParams) {
        return new Promise((resolve, reject)=> {
            var headers:cbl.IHeaders = {'Content-Type': 'application/json'};
            var uri = this.dbUrl.directory(doc._id);
            var requestParams:cbl.IPutDbDocParams = <cbl.IPutDbDocParams>{};
            if (params) requestParams = <cbl.IPutDbDocParams>_.assign(requestParams, params);
            if (doc._rev) {
                requestParams.rev = doc._rev;
                uri.search(requestParams);
            }
            this.processRequest('PUT', uri.toString(), doc, headers, (err, success)=> { if (err)reject(err); else resolve(success); })
        });
    }

    private processRequest(verb:string, url:string, data:Object, headers:Object, cb:Function):void {
        var http = new XMLHttpRequest();
        if (headers) _.forOwn(headers, (value, key)=> { http.setRequestHeader(key, value); });

        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status == 200) cb(false, JSON.parse(http.responseText));
            else cb({status: http.status, response: http.responseText});
        };

        http.open(verb, url, true);
        if (verb === 'GET' || verb === 'DELETE')http.send();
        else if (verb === 'POST' || verb === 'PUT')http.send(JSON.stringify(data));
    }
}

export = cblDB;