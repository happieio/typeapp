/**
 * @namespace jnLib
 * @desc custom services utilized app wide, that needed to be hand written.
 *
 * @property {object} dal - The public interface for data layer access [link]{@link dal}
 *
 * @property {object} accountService - manages the account object within angular [link]{@link accountService}
 * @property {object} userPrefsService - manages saved state within the app [link]{@link userPrefsService}
 *
 * @property {object} jnLibDate - converts UTS timestamps to human readable datetimes [link]{@link jnLibDate }
 * @property {object} lodash - angular wrapper for lodash [link]{@link lodash }
 * @property {object} jnLibIonSlideService - handles ionSlideBox delegate functions [link]{@link jnLibIonSlideService }
 */
define(["require", "exports", 'lib/filters/filters', 'lib/utilities/utilities', 'lib/directives/directives', 'lib/data/data'], function (require, exports, filters, utilities, directives, data) {
    var jnLib = (function () {
        function jnLib() {
        }
        jnLib.moduleName = 'jn.lib';
        jnLib.jnLib = angular.module(jnLib.moduleName, [
            utilities.moduleName,
            filters.moduleName,
            directives.moduleName,
            data.moduleName
        ]);
        return jnLib;
    })();
    return jnLib;
});
