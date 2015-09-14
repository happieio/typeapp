/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'comp/menu/controller'], function (require, exports, menuController) {
    var menu = (function () {
        function menu() {
        }
        menu.moduleName = 'jn.menu';
        return menu;
    })();
    angular.module(menu.moduleName, [
        menuController.moduleName
    ]);
    return menu;
});
