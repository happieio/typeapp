/** @class lodash
 * @desc angular wrapper for lodash
 */

/// <reference path="../../typedefs/tsd.d.ts" />

class lodashService {
    static moduleName = '_';
}

export = lodashService;

angular.module(lodashService.moduleName,[])
    .factory(lodashService.moduleName, ['$window', loDash]);
function loDash($window) {
    return $window._;
}

