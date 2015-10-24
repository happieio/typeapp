/// <reference path="../../../typedefs/tsd.d.ts" />

/** a directive example*/
class searchBarDirective  {
    static moduleName = 'jnSearchBar';
}

export = searchBarDirective;

angular.module(searchBarDirective.moduleName, [])
    .directive(searchBarDirective.moduleName, [jnSearchBar]);

function jnSearchBar() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            filterSearch: '='
        },
        templateUrl: 'jnlib/directives/searchbar/viewfrag.tpl.html'
    };
}
