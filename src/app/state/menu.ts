/// <reference path="../../typedefs/tsd.d.ts" />

import app = require('app/state/appstate');
import menuController = require('comp/menu/controller');

class Menu {

    static state:angular.ui.IState = {
        name: 'app.menu',
        parent: app.state,
        cache: true,
        url: '/menu',
        views: {
            menuContent: {
                templateUrl: menuController.templateUrl,
                controller: menuController.moduleName
            }
        }
    };

}
export = Menu;