/// <reference path="../typedefs/tsd.d.ts" />

import contact = require('comp/contact/moduledef');
import contactDetails = require('comp/contactdetails/moduledef');
import dashboard = require('comp/dashboard/moduledef');
import menu = require('comp/menu/moduledef');

class appComponents {
    static moduleName = 'components';

    static appCompModule = angular.module(appComponents.moduleName, [
        contact.moduleName,
        contactDetails.moduleName,
        dashboard.moduleName,
        menu.moduleName
    ]);

}
export = appComponents;