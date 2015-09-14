/**@namespace jnDashboard
 * @desc More or less a place holder view for tests and partial implemented features.
 * It will eventually have a congruent purpose with the production app.
 */
define(["require", "exports", 'comp/dashboard/controller'], function (require, exports, dashController) {
    var Dashboard = (function () {
        function Dashboard() {
        }
        Dashboard.moduleName = 'jn.dashboard';
        return Dashboard;
    })();
    angular.module(Dashboard.moduleName, [
        dashController.moduleName
    ]);
    return Dashboard;
});
