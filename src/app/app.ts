
/// <reference path="../typedefs/tsd.d.ts" />

/* DEPENDENCY MANAGEMENT use <amd-dependency path="path/to/amd/dep"/>  */

/* APP COMPONENTS*/
import vendorComponents = require('app/vendor');
import appComponents = require('comp/comp');
import lib = require('../lib/lib');

import config = require('app/config');
import configStates = require('app/configstates');
import configRun = require('app/configrun');

/* SERVICES */
import con = require('app/constants');


class app {
    static moduleName = 'typeApp';

    static appMain = angular.module(app.moduleName, [vendorComponents.moduleName, lib.moduleName, appComponents.moduleName])
        .config(config.main)
        .config(configStates.main)
        .run(configRun.main)
}

export = app;

