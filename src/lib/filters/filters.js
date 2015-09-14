/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'lib/filters/filterHelpers', 'lib/filters/lengthcheck', 'lib/filters/twoletters'], function (require, exports, filterHelpers, lengthCheck, twoletters) {
    var jnLibFilter = (function () {
        function jnLibFilter() {
        }
        jnLibFilter.moduleName = 'jnLib.filters';
        return jnLibFilter;
    })();
    angular.module(jnLibFilter.moduleName, [
        filterHelpers.moduleName,
        lengthCheck.moduleName,
        twoletters.moduleName
    ]);
    return jnLibFilter;
});
