/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');

class contactDetailsController {
    static moduleName = 'contactDetailsController';
    static stateName =  'app.contactDetails';
    static templateUrl = 'comp/contactdetails/view.tpl.html';

    //scope variables
    name;

    //injected services
    $scope;
    $stateParams;
    $ionicHistory;
    $state;

    static $inject = [con.ng.$scope, con.ng.$stateParams, con.ionic.$ionicHistory, con.ng.$state];

    constructor($scope, $stateParams, $ionicHistory, $state) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$ionicHistory = $ionicHistory;
        this.$state = $state;

        this.$scope.vm = this;

        this.name = this.$stateParams.name;
    }

    goBack() {
        this.$ionicHistory.goBack();
    }

    goToMoreDetails() {
        this.$state.go('app.contactDetailsDetails');
    }
}

angular.module(contactDetailsController.moduleName, []).controller(contactDetailsController.moduleName, contactDetailsController);
export = contactDetailsController;

