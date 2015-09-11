/// <reference path="../../typedefs/tsd.d.ts" />

import dal = require('lib/data/db/dbapi');


class data {
    static moduleName = () => 'jnLib.data';

    static libDataModule = angular.module(data.moduleName(), [
        dal.moduleName()
    ]);

}

export = data;

