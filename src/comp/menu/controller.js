/**@class jnMenuCtrl
 *@classdesc  Controllers App state via a main side menu
 *
 */
/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/constants', 'app/state/contact', 'app/state/dashboard'], function (require, exports, con, contactState, dashboardState) {
    var menuController = (function () {
        function menuController() {
        }
        menuController.moduleName = 'jnMenuCtrl';
        menuController.templateUrl = 'comp/menu/menu.tpl.html';
        menuController.menuCtrl = angular.module(menuController.moduleName, [])
            .controller(menuController.moduleName, [con.ng.$scope, con.ng.$state, function ($scope, $state) {
                $scope.goToContacts = function () {
                    $state.go(contactState.state.name);
                };
                $scope.goToDashboard = function () {
                    $state.go(dashboardState.state.name);
                };
            }]);
        return menuController;
    })();
    return menuController;
});
