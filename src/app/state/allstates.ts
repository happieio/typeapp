import app = require('app/state/appstate');
import contact = require('app/state/contact');
import contactDetails = require('app/state/contact-details');
import dashboard = require('app/state/dashboard');
import menu = require('app/state/menu');

var allStates = {
    App: app,
    Contact: contact,
    ContactDetails: contactDetails,
    Dashboard: dashboard,
    Menu: menu
};

export = allStates;