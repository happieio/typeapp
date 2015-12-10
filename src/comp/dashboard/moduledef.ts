/// <reference path="../../typedefs/tsd.d.ts" />

import dashController = require('comp/dashboard/controller');

class Dashboard {
    static moduleName =  'comp.dashboard';

    static angularMember = angular.module(Dashboard.moduleName, [
        dashController.moduleName
    ]);
}

export = Dashboard;