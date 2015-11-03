/// <reference path="../typedefs/tsd.d.ts" />

import filters = require('lib/filters/moduledef');
import utilities = require('lib/util/moduledef');
import directives = require('lib/directives/moduledef');
import data = require('lib/data/moduledef');


class jnLib {
    static moduleName = 'jn.lib';

    static jnLib = angular.module(jnLib.moduleName, [
    utilities.moduleName,
    filters.moduleName,
    directives.moduleName,
    data.moduleName
    ]);

}

export = jnLib;




