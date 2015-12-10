/// <reference path="../../typedefs/tsd.d.ts" />

import app = require('app/state/appstate');
import contactDetails = require('comp/contactdetails/controller');

class ContactDetails {

    static state:angular.ui.IState = {
        name:contactDetails.stateName,
        parent: app.state,
        cache: true,
        url: '/contactDetails/:name',
        views: {
            menuContent: {
                templateUrl: contactDetails.templateUrl,
                controller: contactDetails.moduleName
            }
        }
    };

}
export = ContactDetails;