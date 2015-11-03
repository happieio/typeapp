/// <reference path="../../typedefs/tsd.d.ts" />

import contactController = require('comp/contact/controller');

class Contact {
    static moduleName = 'comp.contact';

    static angularMember = angular.module(Contact.moduleName, [
        contactController.moduleName
    ]);

}

export = Contact;