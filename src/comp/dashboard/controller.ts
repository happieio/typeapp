/**@class jnDashboardCtrl
 *@classdesc the dashboard does not have a defined production purpose yet. It is currently being used
 * to monitor replication and view build status as well as providing pouchDB benchmark tests, and provides
 * an access point for the camera.
 */

/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import lodash = require('lib/util/lodash');
import contactState = require('app/state/contact');
import dal = require('lib/data/db/api');

class dashboardController {
    static moduleName = 'dashboardController';
    static templateUrl = 'comp/dashboard/view.tpl.html';

    private $scope;
    private _;
    private $state;

    static $inject:string[] = [con.ng.$scope, lodash.moduleName, con.ng.$state];
    constructor($scope, _, $state){
        this.$scope = $scope;
        this._ = _;
        this.$state = $state;

        this.$scope.vm = this;
    }

    navToContacts() { this.$state.go(contactState.state.name); }

    static dashController = angular.module(dashboardController.moduleName, []).controller(dashboardController.moduleName, dashboardController);
}

export = dashboardController;