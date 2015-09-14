define(["require", "exports", 'app/state/appstate', 'app/state/contact', 'app/state/contact-details', 'app/state/contact-details-details', 'app/state/dashboard', 'app/state/menu'], function (require, exports, app, contact, contactDetails, contactDetailsDetails, dashboard, menu) {
    var allStates = {
        App: app,
        Contact: contact,
        ContactDetails: contactDetails,
        ContactDetailsDetails: contactDetailsDetails,
        Dashboard: dashboard,
        Menu: menu
    };
    return allStates;
});
