/** @class dal
 * @desc database and business model management service
 */
define(["require", "exports"], function (require, exports) {
    /// <reference path="../../../typedefs/tsd.d.ts" />
    var dalService = (function () {
        function dalService() {
        }
        dalService.moduleName = 'dataDalService';
        return dalService;
    })();
    angular.module(dalService.moduleName, [])
        .factory(dalService.moduleName, [dal]);
    function dal() {
        //ADD YOUR DATA ACCESS LAYER HERE
        var publicAPI = {};
        return publicAPI;
    }
    return dalService;
});
