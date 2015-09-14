/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/state/appstate', 'comp/contactdetails/details/controller'], function (require, exports, app, contactDetailsDetails) {
    var ContactDetails = (function () {
        function ContactDetails() {
        }
        ContactDetails.state = {
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
        return ContactDetails;
    })();
    return ContactDetails;
});
