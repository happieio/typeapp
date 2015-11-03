/// <reference path="../../typedefs/tsd.d.ts" />

import searchBar = require('lib/directives/searchbar/directive');

class jnLibDirectives {
    static moduleName = 'directivesModule';
}

export = jnLibDirectives;

angular.module(jnLibDirectives.moduleName, [
    searchBar.moduleName
]);

