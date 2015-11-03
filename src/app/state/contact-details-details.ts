/// <reference path="../../typedefs/tsd.d.ts" />

import app = require('app/state/appstate');
import contactDetailsDetails = require('comp/contactdetails/details/controller');

class ContactDetails {

    static state:angular.ui.IState = {
        name: 'app.contactDetailsDetails',
        parent: app.state,
        cache: true,
        url: '/contactDetailsDetails/:name',
        views: {
            menuContent: {
                templateUrl: contactDetailsDetails.templateUrl,
                controller: contactDetailsDetails.moduleName
            }
        }
    };

}
export = ContactDetails;