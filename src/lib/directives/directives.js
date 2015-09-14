/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'lib/directives/searchbar/searchbardirective'], function (require, exports, searchBar) {
    var jnLibDirectives = (function () {
        function jnLibDirectives() {
        }
        jnLibDirectives.moduleName = 'directivesModule';
        return jnLibDirectives;
    })();
    angular.module(jnLibDirectives.moduleName, [
        searchBar.moduleName
    ]);
    return jnLibDirectives;
});
