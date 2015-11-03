/// <reference path="../../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import CBL = require('lib/data/db/cbl');

/** database and business model management service */
class dalService {
    static moduleName = 'dalService';

    $rootScope:ng.IRootScopeService;

    static $inject = [con.ng.$rootScope];
    constructor($rootScope){
        this.$rootScope = $rootScope; // just an example
    }

    dbMethod(){
        var test = 2;
        this.$rootScope.$broadcast(con.pouchdb.eventChange.change, test);
    }

    static angularModule = angular.module(dalService.moduleName, []).service(dalService.moduleName, dalService);
}

export = dalService;

