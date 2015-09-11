/**@class jnContactCtrl
 * @classdesc manages data gathered by  {@link jnContactDataService} functions for constructing board data. This data is then
 * provided to [jnBoard]{@link module:jnBoard} for building the board directive. Hover zones
 * are also managed in the controller through event calls to {@Link jnLibIonSlideService}.
 *
 */

/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import contactDetails = require('app/state/contact-details');

class contactController {
    static moduleName = () => 'jnContactCtrl';
    static templateUrl = () =>  'comp/contact/contact.tpl.html';

    static contactCtrl = angular.module(contactController.moduleName(), [])
        .controller(contactController.moduleName(),
        [con.ng.$scope(), con.vendorModules._(), con.ng.$state(),
            function ($scope, _, $state) {
                $scope.hello = 'Hello World';

                $scope.contacts = [
                    {name: 'Ron' },
                    {name: 'John'},
                    {name: 'Cron'}
                ];

                $scope.goToDetails = (contact:{name:string}) => {
                    $state.go(contactDetails.state.name, {name:contact.name})
                };



            }]);

}

export = contactController;
