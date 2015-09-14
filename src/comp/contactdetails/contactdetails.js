/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'comp/contactdetails/controller', 'comp/contactdetails/details/controller'], function (require, exports, controller, detailsController) {
    var contactDetails = (function () {
        function contactDetails() {
        }
        contactDetails.moduleName = 'jn.contactDetails';
        return contactDetails;
    })();
    angular.module(contactDetails.moduleName, [
        controller.moduleName,
        detailsController.moduleName
    ]);
    return contactDetails;
});
