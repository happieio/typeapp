/// <reference path="../../typedefs/tsd.d.ts" />

import searchBar = require('lib/directives/searchbar/searchbardirective');

class jnLibDirectives {
    static moduleName = 'directivesModule';
}

export = jnLibDirectives;

angular.module(jnLibDirectives.moduleName, [
    searchBar.moduleName
]);

