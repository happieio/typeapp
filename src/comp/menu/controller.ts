/**@class jnMenuCtrl
 *@classdesc  Controllers App state via a main side menu
 *
 */
/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import contactState = require('app/state/contact');
import dashboardState = require('app/state/dashboard');


class menuController {
    static moduleName = 'menuController';
    static templateUrl = 'comp/menu/view.tpl.html';

    private $scope;
    private $state;

    static $inject:string[] = [con.ng.$scope, con.ng.$state];
    constructor($scope, $state){
        this.$scope = $scope;
        this.$state = $state;

        this.$scope.vm = this;
    }

    goToContacts() {this.$state.go(contactState.state.name); }

    goToDashboard() { this.$state.go(dashboardState.state.name); }

    static menuCtrl = angular.module(menuController.moduleName, []).controller(menuController.moduleName, menuController);
}

export = menuController;