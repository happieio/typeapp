/* TYPE DEFS */
/// <reference path="../typedefs/tsd.d.ts" />

/* DEPENDENCY MANAGEMENT use <amd-dependency path="path/to/amd/dep"/>  */

/* APP COMPONENTS*/
import vendorComponents = require('app/vendor');
import appComponents = require('comp/comp');
import lib = require('../lib/lib');

/* SERVICES */
import con = require('app/constants');
import states = require('./state/allstates');

class app {
    static moduleName = 'typeApp';

    static appMain = angular.module(app.moduleName, [
        vendorComponents.moduleName,
        lib.moduleName,
        appComponents.moduleName
    ]).config([
        con.ionic.$ionicConfigProvider,
        con.ng.$urlRouterProvider,
        con.ng.$stateProvider,
        function ($ionicConfigProvider, $urlRouterProvider, $stateProvider) {

            $ionicConfigProvider.platform.android.scrolling.jsScrolling(false);

            $urlRouterProvider.otherwise(states.App.state.url + '' + states.Dashboard.state.url);

            $stateProvider
                .state(states.App.state)
                .state(states.Contact.state)
                .state(states.ContactDetails.state)
                .state(states.Dashboard.state)
                .state(states.Menu.state);
        }])

        .run([con.ionic.$ionicPlatform, con.plugins.$cordovaKeyboard,
            function ($ionicPlatform, $cordovaKeyboard) {
                $ionicPlatform.ready(function () {

                    //ALL YOUR RUNTIME CONFIGS HERE
                    $cordovaKeyboard.hideAccessoryBar(false);
                    $cordovaKeyboard.disableScroll(true);
                });
            }])

}

export = app;

