/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');

/** angular wrapper for URI.js*/
class uriService {
    static moduleName = 'URI';
    static angularModule:ng.IModule = angular.module(uriService.moduleName, []).factory(uriService.moduleName, [con.ng.$window, ($window) => {return $window.URI;}]);
}

export = uriService;



