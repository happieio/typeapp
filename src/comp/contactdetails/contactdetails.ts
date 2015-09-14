/// <reference path="../../typedefs/tsd.d.ts" />


/* MAIN */
import controller = require('comp/contactdetails/controller');

import con = require('app/constants')

class contactDetails {
    static moduleName =  'jn.contactDetails';

}

angular.module(contactDetails.moduleName, [
    controller.moduleName
]);

export = contactDetails;
