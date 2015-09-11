/// <reference path="../typedefs/tsd.d.ts" />

/*AMD DEPENDENCY MANAGEMENT*/

import contact = require('comp/contact/contact');
import contactDetails = require('comp/contactdetails/contactdetails');
import dashboard = require('comp/dashboard/dashboard');
import menu = require('comp/menu/menu');

class appComponents {
    static moduleName = () => 'jn.components';

    static appCompModule = angular.module(appComponents.moduleName(), [
        contact.moduleName(),
        contactDetails.moduleName(),
        dashboard.moduleName(),
        menu.moduleName()
    ]);

}
export = appComponents;




