/**@class contactController
 */

/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import lodash = require('lib/util/lodash');
import contactDetails = require('app/state/contact-details');

interface commonScope extends ng.IScope {
    vm: any; // covers all of the additions to scope
}

class contactController {
    static moduleName = 'contactController';
    static stateName = 'app.contact';
    static templateUrl = 'comp/contact/view.tpl.html';

    //scope variables
    hello;
    contacts;

    //injected variables
    $scope: commonScope;
    _: _.LoDashStatic;
    $state: angular.ui.IStateService;

    static $inject = [con.ng.$scope, lodash.moduleName, con.ng.$state];
    constructor($scope, _, $state) {
        this.$scope = $scope;
        this._ = _;
        this.$state = $state;

        this.$scope.vm = this;

        this.hello = 'Hello World';
        this.contacts = [
            {name: 'Ron'},
            {name: 'John'},
            {name: 'Cron'}
        ]
    }

    goToDetails(contact:{name:string}) {
        this.$state.go(contactDetails.state.name, {name: contact.name})
    }

    static angularModule = angular.module(contactController.moduleName, []).controller(contactController.moduleName, contactController);
}

export = contactController;
