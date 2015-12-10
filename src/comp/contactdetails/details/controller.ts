/// <reference path="../../../typedefs/tsd.d.ts" />

import con = require('app/constants');

class contactDetailsController {
    static moduleName = 'contactDetailsDetailsController';
    static templateUrl = 'comp/contactdetails/details/view.tpl.html';

    name;

    $scope;
    $stateParams;
    $ionicHistory;

    static $inject = [con.ng.$scope, con.ng.$stateParams, con.ionic.$ionicHistory];

    constructor($scope, $stateParams, $ionicHistory) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$ionicHistory = $ionicHistory;

        this.$scope.vm = this;

        this.name = this.$stateParams.name;
    }

    goBack() { this.$ionicHistory.goBack(); }

}

angular.module(contactDetailsController.moduleName, []).controller(contactDetailsController.moduleName, contactDetailsController);
export = contactDetailsController;

