/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/constants'], function (require, exports, con) {
    var contactDetailsController = (function () {
        function contactDetailsController() {
        }
        contactDetailsController.moduleName = 'jnContactDetailsCtrl';
        contactDetailsController.templateUrl = 'comp/contactdetails/contactdetails.tpl.html';
        contactDetailsController.contactDetails = angular.module(contactDetailsController.moduleName, [])
            .controller(contactDetailsController.moduleName, [con.ng.$scope, con.ng.$stateParams, con.ionic.$ionicHistory, con.ng.$state,
            function ($scope, $stateParams, $ionicHistory, $state) {
                $scope.name = $stateParams.name;
                $scope.goBack = function () {
                    $ionicHistory.goBack();
                };
                $scope.goToMoreDetails = function () {
                    $state.go('app.contactDetailsDetails');
                };
            }]);
        return contactDetailsController;
    })();
    return contactDetailsController;
});
