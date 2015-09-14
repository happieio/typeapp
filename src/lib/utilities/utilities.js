/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'lib/utilities/lodash'], function (require, exports, lodash) {
    var jnLibUtilities = (function () {
        function jnLibUtilities() {
        }
        jnLibUtilities.moduleName = 'jnLib.utilities';
        jnLibUtilities.jnLibUtil = angular.module(jnLibUtilities.moduleName, [
            lodash.moduleName
        ]);
        return jnLibUtilities;
    })();
    return jnLibUtilities;
});
