/// <reference path="../../typedefs/tsd.d.ts" />
define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.state = {
            name: 'app',
            url: '/app',
            abstract: true,
            templateUrl: 'comp/menu/menu.tpl.html'
        };
        return App;
    })();
    return App;
});
