/// <reference path="../typedefs/tsd.d.ts" />

import filters = require('lib/filters/moduledef');
import utilities = require('lib/util/moduledef');
import directives = require('lib/directives/moduledef');
import data = require('lib/data/moduledef');


class coreLib {
    static moduleName = 'comp.lib';

    static coreLib = angular.module(coreLib.moduleName, [
    utilities.moduleName,
    filters.moduleName,
    directives.moduleName,
    data.moduleName
    ]);

}

export = coreLib;




