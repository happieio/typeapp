/// <reference path="../../../typedefs/tsd.d.ts" />
import con = require('app/constants');
import CBL = require('lib/data/db/cbl');

/** database and business model management service */
class dalService {
    static moduleName = 'dalService';

    private db:CBL = null;

    private $rootScope:ng.IRootScopeService;

    static $inject = [con.ng.$rootScope];

    constructor($rootScope) {
        this.$rootScope = $rootScope; // just an example

        ionic.Platform.ready(()=> {
            setTimeout(()=> {
                this.db = new CBL('test');
                this.db.initDB()
                    .then((success)=> {
                        console.log(success);
                        alert('CBL Ready :)')
                    })
                    .catch((err)=> {console.log(err); });
            }, 2000);
        })

    }

    upsertDoc(doc, params) {
        return this.db.upsert(doc, params)
            .then((success)=> {return success;})
            .catch((err)=> {return err;});
    }

    getDoc(docId, params) {
        return this.db.get(docId, params)
            .then((success)=> {return success;})
            .catch((err)=> {return err;});
    }

    allDocs(params?:cbl.IAllDocsParams) {
        return this.db.allDocs(params)
            .then((success)=> {return success;})
            .catch((err)=> {return err;});
    }

    activeTasks(){
        return this.db.activeTasks()
            .then((success)=> {return success;})
            .catch((err)=> {return err;});
    }

    bulkDocs(docs) {
        return this.db.bulkDocs(docs)
            .then((success)=> {return success;})
            .catch((err)=> {return err;});
    }

    startTwoWayReplication() {
        return Promise.join(
            this.db.replicateFrom(null,'YOUR_SYNC_GATEWAY_URL_HERE'),
            this.db.replicateTo(null, 'YOUR_SYNC_GATEWAY_URL_HERE')
        )

    }

    cancelTwoWayReplication(toId, fromId){
        return Promise.join(
            this.db.replicateTo({replication_id:toId, cancel: true}, 'http://joeblack:apple@52.24.70.219/test'),
            this.db.replicateFrom({replication_id:fromId, cancel: true}, 'http://joeblack:apple@52.24.70.219/test')
        );
    }

    getView(){
        return this.db.query('view1/by_type',{startkey: '0.400606118934229', endkey:'0.8'})
            .then((success)=> {return success;})
            .catch((err)=> {return err;});
    }

    static angularModule = angular.module(dalService.moduleName, []).service(dalService.moduleName, dalService);
}

export = dalService;

