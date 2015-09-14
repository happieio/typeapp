/**@class jnContactCtrl
 * @classdesc manages data gathered by  {@link jnContactDataService} functions for constructing board data. This data is then
 * provided to [jnBoard]{@link module:jnBoard} for building the board directive. Hover zones
 * are also managed in the controller through event calls to {@Link jnLibIonSlideService}.
 *
 */
define(["require", "exports", 'app/constants', 'app/state/contact-details'], function (require, exports, con, contactDetails) {
    var contactController = (function () {
        function contactController() {
        }
        contactController.moduleName = 'jnContactCtrl';
        contactController.templateUrl = 'comp/contact/contact.tpl.html';
        contactController.contactCtrl = angular.module(contactController.moduleName, [])
            .controller(contactController.moduleName, [con.ng.$scope, con.vendorModules._, con.ng.$state,
            function ($scope, _, $state) {
                $scope.hello = 'Hello World';
                $scope.contacts = [
                    { name: 'Ron' },
                    { name: 'John' },
                    { name: 'Cron' }
                ];
                $scope.goToDetails = function (contact) {
                    $state.go(contactDetails.state.name, { name: contact.name });
                };
            }]);
        return contactController;
    })();
    return contactController;
});
