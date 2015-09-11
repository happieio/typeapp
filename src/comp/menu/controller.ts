/**@class jnMenuCtrl
 *@classdesc  Controllers App state via a main side menu
 *
 */
/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import contactState = require('app/state/contact');
import dashboardState = require('app/state/dashboard');


class menuController {
    static moduleName = () => 'jnMenuCtrl';
    static templateUrl = () => 'comp/menu/menu.tpl.html';

    static menuCtrl = angular.module(menuController.moduleName(), [])
        .controller(menuController.moduleName(), [con.ng.$scope(), con.ng.$state(), ($scope, $state) => {

            $scope.goToContacts = () => {
              $state.go(contactState.state.name);
            };

            $scope.goToDashboard = () => {
                $state.go(dashboardState.state.name);
            };

        }]);


}

export = menuController;

