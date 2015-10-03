import app = require('app/state/appstate');
import contact = require('app/state/contact');
import contactDetails = require('app/state/contact-details');
import contactDetailsDetails = require('app/state/contact-details-details');
import dashboard = require('app/state/dashboard');
import menu = require('app/state/menu');

class allstates {
    static App = app;
    static Contact = contact;
    static ContactDetails = contactDetails;
    static ContactDetailsDetails = contactDetailsDetails;
    static Dashboard = dashboard;
    static Menu = menu;
}

export = allstates;