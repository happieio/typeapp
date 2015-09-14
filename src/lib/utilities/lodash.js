/** @class lodash
 * @desc angular wrapper for lodash
 */
define(["require", "exports"], function (require, exports) {
    /// <reference path="../../typedefs/tsd.d.ts" />
    var lodashService = (function () {
        function lodashService() {
        }
        lodashService.moduleName = '_';
        return lodashService;
    })();
    angular.module(lodashService.moduleName, [])
        .factory(lodashService.moduleName, ['$window', loDash]);
    function loDash($window) {
        return $window._;
    }
    return lodashService;
});
