/// <reference path="../../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/constants'], function (require, exports, con) {
    var contactDetailsController = (function () {
        function contactDetailsController() {
        }
        contactDetailsController.moduleName = 'jnContactDetailsDetailsCtrl';
        contactDetailsController.templateUrl = 'comp/contactdetails/details/contactdetails.tpl.html';
        contactDetailsController.contactDetails = angular.module(contactDetailsController.moduleName, [])
            .controller(contactDetailsController.moduleName, [con.ng.$scope, con.ng.$stateParams, con.ionic.$ionicHistory,
            function ($scope, $stateParams, $ionicHistory) {
                $scope.name = $stateParams.name;
                $scope.goBack = function () {
                    $ionicHistory.goBack();
                };
            }]);
        return contactDetailsController;
    })();
    return contactDetailsController;
});
