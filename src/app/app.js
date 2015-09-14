/* TYPE DEFS */
/// <reference path="../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/vendor', 'comp/comp', '../lib/lib', 'app/constants', './state/allstates'], function (require, exports, vendorComponents, appComponents, lib, con, states) {
    var app = (function () {
        function app() {
        }
        app.moduleName = 'typeApp';
        app.appMain = angular.module(app.moduleName, [
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
                    .state(states.ContactDetailsDetails.state)
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
            }]);
        return app;
    })();
    return app;
});
