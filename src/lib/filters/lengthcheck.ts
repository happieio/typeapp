/// <reference path="../../typedefs/tsd.d.ts" />

class lengthFilter {
    static moduleName = () => 'jnLib.util.lengthCheck';
    static filterName = () => 'lengthCheck';
}

export = lengthFilter;

angular.module(lengthFilter.moduleName(), [])
    .filter(lengthFilter.filterName(), function () {
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

