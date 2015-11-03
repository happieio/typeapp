/// <reference path="../../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import CBL = require('lib/data/db/cbl');

/** database and business model management service */
class dalService {
    static moduleName = 'dalService';

    private db:CBL;

    private $rootScope:ng.IRootScopeService;

    static $inject = [con.ng.$rootScope];
    constructor($rootScope){
        this.$rootScope = $rootScope; // just an example
    }

    createDB(dbName){
        this.db = new CBL(dbName);
    }

    initDB(){
        return this.db.initDB()
            .then((success)=>{return success; })
            .catch((err)=>{return err; });
    }

    static angularModule = angular.module(dalService.moduleName, []).service(dalService.moduleName, dalService);
}

export = dalService;

