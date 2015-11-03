/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');

/**angular wrapper for lodash*/
class lodashService {
    static moduleName = '_';
    static angularModule:ng.IModule = angular.module(lodashService.moduleName, []).factory(lodashService.moduleName, [con.ng.$window, ($window) => {return $window._;}]);
}

export = lodashService;