/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports"], function (require, exports) {
    var lengthFilter = (function () {
        function lengthFilter() {
        }
        lengthFilter.moduleName = 'jnLib.util.lengthCheck';
        lengthFilter.filterName = 'lengthCheck';
        return lengthFilter;
    })();
    angular.module(lengthFilter.moduleName, [])
        .filter(lengthFilter.filterName, function () {
        return function (name, len) {
            if (name) {
                name = name.trim();
                if (name.length > len) {
                    name = name.substring(0, len).trim() + '...';
                }
            }
            return name;
        };
    });
    return lengthFilter;
});
