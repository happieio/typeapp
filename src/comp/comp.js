/// <reference path="../typedefs/tsd.d.ts" />
define(["require", "exports", 'comp/contact/contact', 'comp/contactdetails/contactdetails', 'comp/dashboard/dashboard', 'comp/menu/menu'], function (require, exports, contact, contactDetails, dashboard, menu) {
    var appComponents = (function () {
        function appComponents() {
        }
        appComponents.moduleName = 'jn.components';
        appComponents.appCompModule = angular.module(appComponents.moduleName, [
            contact.moduleName,
            contactDetails.moduleName,
            dashboard.moduleName,
            menu.moduleName
        ]);
        return appComponents;
    })();
    return appComponents;
});
