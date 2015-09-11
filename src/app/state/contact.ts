/// <reference path="../../typedefs/tsd.d.ts" />

import app = require('app/state/appstate');
import ContactController = require('comp/contact/controller');

class Contact {

    static state:angular.ui.IStateChildObj = {
        name: 'app.contact',
        parent: app.state,
        cache: true,
        url: '/contact',
        views: {
            menuContent: {
                templateUrl: ContactController.templateUrl(),
                controller: ContactController.moduleName()
            }
        }
    };

}
export  = Contact;