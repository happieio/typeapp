/// <reference path="../../typedefs/tsd.d.ts" />

/** angular wrapper for lodash */
class lodashService {
    static moduleName = '_';

    static angularModule = angular.module(lodashService.moduleName,[]).factory(lodashService.moduleName, ['$window', loDash]);
}

export = lodashService;


function loDash($window) {return $window._; }

