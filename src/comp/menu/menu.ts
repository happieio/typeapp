/// <reference path="../../typedefs/tsd.d.ts" />


import menuController = require('comp/menu/controller');

class menu {
    static moduleName = 'jn.menu';
}

angular.module(menu.moduleName, [
    menuController.moduleName
]);

export = menu;