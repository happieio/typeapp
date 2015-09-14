/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/state/appstate', 'comp/dashboard/controller'], function (require, exports, app, DashboardController) {
    var Dashboard = (function () {
        function Dashboard() {
        }
        Dashboard.state = {
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
        return Dashboard;
    })();
    return Dashboard;
});
