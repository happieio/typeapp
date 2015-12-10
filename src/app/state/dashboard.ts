/// <reference path="../../typedefs/tsd.d.ts" />

import app = require('app/state/appstate');
import DashboardController = require('comp/dashboard/controller');

class Dashboard {

    static state:angular.ui.IState = {
        name: DashboardController.stateName,
        parent: app.state,
        cache: true,
        url: '/dashboard',
        views: {
            menuContent: {
                templateUrl: DashboardController.templateUrl,
                controller: DashboardController.moduleName
            }
        }
    };

}
export = Dashboard;
