/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');

class contactDetailsController {
    static moduleName = () =>  'jnContactDetailsCtrl';
    static templateUrl = () =>  'comp/contactdetails/contactdetails.tpl.html';

    static contactDetails = angular.module(contactDetailsController.moduleName(), [])
        .controller(contactDetailsController.moduleName(),
        [con.ng.$scope(), con.ng.$stateParams(), con.ionic.$ionicHistory(),
            ($scope, $stateParams, $ionicHistory) => {

                $scope.name = $stateParams.name;

                $scope.goBack = () => {
                  $ionicHistory.goBack();
                };

            }]);
}

export = contactDetailsController;

