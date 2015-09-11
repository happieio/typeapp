/// <reference path="../../typedefs/tsd.d.ts" />

class twoLetterFilter {
    static moduleName = () => 'jnLib.filters.twoLetters';
    static filterName = () => 'twoLetters';
}

export = twoLetterFilter;

angular.module(twoLetterFilter.moduleName(), [])
    .filter(twoLetterFilter.filterName(), function () {
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


 