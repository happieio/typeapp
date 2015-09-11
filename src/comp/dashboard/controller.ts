/**@class jnDashboardCtrl
 *@classdesc the dashboard does not have a defined production purpose yet. It is currently being used
 * to monitor replication and view build status as well as providing pouchDB benchmark tests, and provides
 * an access point for the camera.
 */

/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import contactState = require('app/state/contact');

class dashboardController {
    static moduleName = () =>  'jnDashboardCtrl';
    static templateUrl = () =>  'comp/dashboard/dashboard.tpl.html';

    static dashController = angular.module(dashboardController.moduleName(), [])
        .controller(dashboardController.moduleName(),
        [con.ng.$scope(), con.vendorModules._(), con.ng.$state(),
            ($scope, _, $state) => {

                $scope.navToContacts = () => {
                    $state.go(contactState.state.name);
                }

        }]);
}

export = dashboardController;


