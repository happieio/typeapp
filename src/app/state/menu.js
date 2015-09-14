/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports", 'app/state/appstate', 'comp/menu/controller'], function (require, exports, app, menuController) {
    var Menu = (function () {
        function Menu() {
        }
        Menu.state = {
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
        return Menu;
    })();
    return Menu;
});
