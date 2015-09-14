/**@class jnDashboardCtrl
 *@classdesc the dashboard does not have a defined production purpose yet. It is currently being used
 * to monitor replication and view build status as well as providing pouchDB benchmark tests, and provides
 * an access point for the camera.
 */
define(["require", "exports", 'app/constants', 'app/state/contact'], function (require, exports, con, contactState) {
    var dashboardController = (function () {
        function dashboardController() {
        }
        dashboardController.moduleName = 'jnDashboardCtrl';
        dashboardController.templateUrl = 'comp/dashboard/dashboard.tpl.html';
        dashboardController.dashController = angular.module(dashboardController.moduleName, [])
            .controller(dashboardController.moduleName, [con.ng.$scope, con.vendorModules._, con.ng.$state,
            function ($scope, _, $state) {
                $scope.navToContacts = function () {
                    $state.go(contactState.state.name);
                };
            }]);
        return dashboardController;
    })();
    return dashboardController;
});
