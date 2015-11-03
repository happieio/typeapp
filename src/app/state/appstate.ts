/// <reference path="../../typedefs/tsd.d.ts" />

class App {

    static state:angular.ui.IState = {
        name: 'app',
        url: '/app',
        abstract: true,
        templateUrl: 'comp/menu/menu.tpl.html'
    };
}

export = App;