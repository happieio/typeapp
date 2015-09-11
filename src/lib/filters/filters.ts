/// <reference path="../../typedefs/tsd.d.ts" />

import filterHelpers = require('lib/filters/filterHelpers');
import lengthCheck = require('lib/filters/lengthcheck');
import twoletters = require('lib/filters/twoletters');

class jnLibFilter {
    static moduleName = () => 'jnLib.filters';
}

export = jnLibFilter;

angular.module(jnLibFilter.moduleName(), [
    filterHelpers.moduleName(),
    lengthCheck.moduleName(),
    twoletters.moduleName()
]);

