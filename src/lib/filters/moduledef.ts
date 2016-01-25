/// <reference path="../../typedefs/tsd.d.ts" />

import filterHelpers = require('lib/filters/filterhelpers');

class jnLibFilter {
    static moduleName = 'jnLib.filters';
}

export = jnLibFilter;

angular.module(jnLibFilter.moduleName, [
    filterHelpers.moduleName
]);

