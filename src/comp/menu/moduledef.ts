/// <reference path="../../typedefs/tsd.d.ts" />

import menuController = require('comp/menu/controller');

class menu {
    static moduleName = 'jn.menu';

    static angularMember = angular.module(menu.moduleName, [
        menuController.moduleName
    ]);
}

export = menu;