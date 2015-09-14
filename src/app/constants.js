/* TYPE DEFS */
/// <reference path="../typedefs/tsd.d.ts" />
define(["require", "exports"], function (require, exports) {
    var constants = (function () {
        function constants() {
        }
        constants.GLOBAL_STATIC_VAR = 'The constant here';
        constants.UTS_MULT = 1000;
        /**
         * These are a single source of truth for angular component names. make sure the component you want to use
         * has its module registered in src/app/vendor.ts
         */
        constants.ng = {
            $rootScope: '$rootScope',
            $scope: '$scope',
            $state: '$state',
            $stateParams: '$stateParams',
            $stateProvider: '$stateProvider',
            $templateCache: '$templateCache',
            $urlRouterProvider: '$urlRouterProvider',
            $window: '$window'
        };
        constants.ionic = {
            ionic: 'ionic',
            $ionicConfigProvider: '$ionicConfigProvider',
            $ionicHistory: '$ionicHistory',
            $ionicModal: '$ionicModal',
            $ionicPlatform: '$ionicPlatform',
            events: {
                $ionicViewBeforeEnter: '$ionicView.beforeEnter'
            }
        };
        constants.plugins = {
            $cordovaFile: '$cordovaFile',
            $cordovaKeyboard: '$cordovaKeyboard',
            $cordovaNetwork: '$cordovaNetwork'
        };
        constants.vendorModules = {
            _: '_',
            ngCordova: 'ngCordova',
            uiRouter: 'ui.router'
        };
        constants.jn = {};
        return constants;
    })();
    return constants;
});
