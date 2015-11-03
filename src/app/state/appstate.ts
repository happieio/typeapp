/// <reference path="../../typedefs/tsd.d.ts" />
import menuController = require('comp/menu/controller');
class App {

    static state:angular.ui.IState = {
        name: 'app',
        url: '/app',
        abstract: true,
        templateUrl: 'comp/menu/view.tpl.html' //must be inline string literal
    };
}

export = App;