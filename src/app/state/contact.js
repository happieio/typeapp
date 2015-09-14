/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/state/appstate', 'comp/contact/controller'], function (require, exports, app, ContactController) {
    var Contact = (function () {
        function Contact() {
        }
        Contact.state = {
            name: 'app.contact',
            parent: app.state,
            cache: true,
            url: '/contact',
            views: {
                menuContent: {
                    templateUrl: ContactController.templateUrl,
                    controller: ContactController.moduleName
                }
            }
        };
        return Contact;
    })();
    return Contact;
});
