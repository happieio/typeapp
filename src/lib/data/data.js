/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'lib/data/db/dbapi'], function (require, exports, dal) {
    var data = (function () {
        function data() {
        }
        data.moduleName = 'jnLib.data';
        data.libDataModule = angular.module(data.moduleName, [
            dal.moduleName
        ]);
        return data;
    })();
    return data;
});
