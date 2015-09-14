/* TYPE DEFS */
/// <reference path="../typedefs/tsd.d.ts" />

class constants {

    static GLOBAL_STATIC_VAR =  'The constant here';
    static UTS_MULT =   1000;

    /**
     * These are a single source of truth for angular component names. make sure the component you want to use
     * has its module registered in src/app/vendor.ts
     */
    static ng = {
        $rootScope:  '$rootScope',
        $scope:  '$scope',
        $state:   '$state',
        $stateParams:  '$stateParams',
        $stateProvider:  '$stateProvider',
        $templateCache:  '$templateCache',
        $urlRouterProvider :  '$urlRouterProvider',
        $window:   '$window'
    };

    static ionic = {
        ionic :  'ionic',
        $ionicConfigProvider:  '$ionicConfigProvider',
        $ionicHistory:  '$ionicHistory',
        $ionicModal :  '$ionicModal',
        $ionicPlatform :  '$ionicPlatform',
        events: {
            $ionicViewBeforeEnter:  '$ionicView.beforeEnter'
        }
    };

    static plugins = {
        $cordovaFile:   '$cordovaFile',
        $cordovaKeyboard :  '$cordovaKeyboard',
        $cordovaNetwork:  '$cordovaNetwork'
    };

    static vendorModules = {
        _:  '_',
        ngCordova:  'ngCordova',
        uiRouter :  'ui.router'
    };

    static jn = {

    };

}

export = constants;