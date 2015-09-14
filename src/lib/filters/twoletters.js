/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports"], function (require, exports) {
    var twoLetterFilter = (function () {
        function twoLetterFilter() {
        }
        twoLetterFilter.moduleName = 'jnLib.filters.twoLetters';
        twoLetterFilter.filterName = 'twoLetters';
        return twoLetterFilter;
    })();
    angular.module(twoLetterFilter.moduleName, [])
        .filter(twoLetterFilter.filterName, function () {
        return function (ownerName) {
            if (ownerName) {
                var letters = ownerName.replace(/\W*(\w)\w*/g, '$1').toUpperCase();
                if (letters.length > 2) {
                    letters = letters.substring(0, 2);
                }
                return letters;
            }
            return '';
        };
    });
    return twoLetterFilter;
});
