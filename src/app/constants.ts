/// <reference path="../typedefs/tsd.d.ts" />
alert('Paused execution before angular bootstraps');
class constants {

    static ng = {
        $attrs: '$attrs',
        $compileProvider: '$compileProvider',
        $delegate: '$delegate',
        $filter: '$filter',
        $http: '$http',
        $httpProvider: '$httpProvider',
        $interval: '$interval',
        $log: '$log',
        $logProvider: '$logProvider',
        $provide: '$provide',
        $q: '$q',
        $rootScope: '$rootScope',
        $sceDelegateProvider: '$sceDelegateProvider',
        $scope: '$scope',
        $state: '$state',
        $stateParams: '$stateParams',
        $stateProvider: '$stateProvider',
        $templateCache: '$templateCache',
        $timeout: '$timeout',
        $urlRouterProvider: '$urlRouterProvider',
        $window: '$window',
        events: {
            destroy: '$destroy'
        }
    };

    static ionic = {
        ionic: 'ionic',
        $ionicActionSheet: '$ionicActionSheet',
        $ionicConfigProvider: '$ionicConfigProvider',
        $ionicHistory: '$ionicHistory',
        $ionicLoading: '$ionicLoading',
        $ionicModal: '$ionicModal',
        $ionicPlatform: '$ionicPlatform',
        $ionicPopover: '$ionicPopover',
        $ionicPopup: '$ionicPopup',
        $ionicPosition: '$ionicPosition',
        $ionicScrollDelegate: '$ionicScrollDelegate',
        $ionicSideMenuDelegate: '$ionicSideMenuDelegate',
        $ionicSlideBoxDelegate: '$ionicSlideBoxDelegate',
        events: {
            afterEnter: '$ionicView.afterEnter',
            beforeEnter: '$ionicView.beforeEnter',
            beforeLeave: '$ionicView.beforeLeave',
            enter: '$ionicView.enter',
            loaded: '$ionicView.loaded',

        }
    };

    static plugins = {
        $cordovaFile: '$cordovaFile',
        $cordovaFileTransfer: '$cordovaFileTransfer',
        $cordovaKeyboard: '$cordovaKeyboard',
        $cordovaNetwork: '$cordovaNetwork'
    };

    static pouchdb = {
        eventChange: {
            change: 'change',
            complete: 'complete',
            error: 'error'
        },
        eventReplicate: {
            active: 'active',
            change: 'change',
            complete: 'complete',
            denied: 'denied',
            error: 'error',
            paused: 'paused'
        }
    };

    static vendorModules = {
        angularLocalStorage: 'angularLocalStorage',
        ngCordova: 'ngCordova',
        uiRouter: 'ui.router'
    };

}

export = constants;