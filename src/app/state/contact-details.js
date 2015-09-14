/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/state/appstate', 'comp/contactdetails/controller'], function (require, exports, app, contactDetails) {
    var ContactDetails = (function () {
        function ContactDetails() {
        }
        ContactDetails.state = {
            name: 'app.contactDetails',
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
        return ContactDetails;
    })();
    return ContactDetails;
});
