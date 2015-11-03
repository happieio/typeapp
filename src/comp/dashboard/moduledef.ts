/// <reference path="../../typedefs/tsd.d.ts" />

import dashController = require('comp/dashboard/controller');

class Dashboard {
    static moduleName =  'jn.dashboard';

    static angularMember = angular.module(Dashboard.moduleName, [
        dashController.moduleName
    ]);
}

export = Dashboard;