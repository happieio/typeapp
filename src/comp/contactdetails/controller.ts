/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');

class contactDetailsController {
    static moduleName =  'jnContactDetailsCtrl';
    static templateUrl =  'comp/contactdetails/contactdetails.tpl.html';

    static contactDetails = angular.module(contactDetailsController.moduleName, [])
        .controller(contactDetailsController.moduleName,
        [con.ng.$scope, con.ng.$stateParams, con.ionic.$ionicHistory, con.ng.$state,
            ($scope, $stateParams, $ionicHistory, $state) => {

                $scope.name = $stateParams.name;

                $scope.goBack = () => {
                  $ionicHistory.goBack();
                };

                $scope.goToMoreDetails = () => {
                    $state.go('app.contactDetailsDetails');
                }

            }]);
}

export = contactDetailsController;

