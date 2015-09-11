/**@class jnSearchBar
 * @desc the board directive is a customization on top of the ionic slidebox directive. jn-board
 * is composed of list(s) which are customizations on top of ion-slide. the board directive generates
 * a list of cards to put in each list. see jnCard
 */

/// <reference path="../../../typedefs/tsd.d.ts" />

class searchBarDirective  {
    static moduleName = () => 'jnSearchBar';
}

export = searchBarDirective;

angular.module(searchBarDirective.moduleName(), [])
    .directive(searchBarDirective.moduleName(), [jnSearchBar]);

function jnSearchBar() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            filterSearch: '='
        },
        templateUrl: 'jnlib/directives/searchbar/search.tpl.html'
    };
}
