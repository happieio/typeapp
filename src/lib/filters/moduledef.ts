/// <reference path="../../typedefs/tsd.d.ts" />

import filterHelpers = require('lib/filters/filterHelpers');

class jnLibFilter {
    static moduleName = 'jnLib.filters';
}

export = jnLibFilter;

angular.module(jnLibFilter.moduleName, [
    filterHelpers.moduleName
]);

