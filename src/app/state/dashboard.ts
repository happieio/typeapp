/// <reference path="../../typedefs/tsd.d.ts" />

import app = require('app/state/appstate');
import DashboardController = require('comp/dashboard/controller');

class Dashboard {

    static state:angular.ui.IStateChildObj = {
        name: 'app.dashboard',
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
