/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'comp/contactdetails/controller'], function (require, exports, controller) {
    var contactDetails = (function () {
        function contactDetails() {
        }
        contactDetails.moduleName = 'jn.contactDetails';
        return contactDetails;
    })();
    angular.module(contactDetails.moduleName, [
        controller.moduleName
    ]);
    return contactDetails;
});
