/// <reference path="../typedefs/tsd.d.ts" />

import con = require('app/constants');
import states = require('./state/allstates');

class appConfigStates {
    static main = [
        con.ng.$urlRouterProvider,
        con.ng.$stateProvider,
        ($urlRouterProvider:angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {

            $urlRouterProvider.otherwise(states.App.state.url + '' + states.Dashboard.state.url);

            $stateProvider
                .state(states.App.state)
                .state(states.Contact.state)
                .state(states.ContactDetails.state)
                .state(states.ContactDetailsDetails.state)
                .state(states.Dashboard.state)
                .state(states.Menu.state);
        }];
}

export = appConfigStates;