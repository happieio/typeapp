/// <reference path="../../../typedefs/tsd.d.ts" />
alert();
import con = require('app/constants');
import CBL = require('lib/data/db/cbl');

/** database and business model management service */
class dalService {
    static moduleName = 'dalService';

    private db:CBL = null;

    private $rootScope:ng.IRootScopeService;

    static $inject = [con.ng.$rootScope];
    constructor($rootScope){
        this.$rootScope = $rootScope; // just an example

        ionic.Platform.ready(()=>{
            setTimeout(()=>{
                this.db = new CBL('test');
                this.db.initDB()
                    .then((success)=>{console.log(success); })
                    .catch((err)=>{console.log(err); });
            },3000);
        })

    }

    putDoc(doc, params){
        return this.db.upsert(doc, params)
            .then((success)=>{return success;})
            .catch((err)=>{return err;});
    }

    getDoc(docId, params){
        return this.db.get(docId, params)
            .then((success)=>{return success;})
            .catch((err)=>{return err;});
    }

    static angularModule = angular.module(dalService.moduleName, []).service(dalService.moduleName, dalService);
}

export = dalService;

