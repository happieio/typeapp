define(["require", "exports", 'app/constants'], function (require, exports, con) {
    var vendorComponents = (function () {
        function vendorComponents() {
        }
        vendorComponents.moduleName = 'jn.vendor.components';
        vendorComponents.vendorModule = angular.module(vendorComponents.moduleName, [
            con.ionic.ionic,
            con.vendorModules.uiRouter,
            con.vendorModules.ngCordova
        ]);
        return vendorComponents;
    })();
    return vendorComponents;
});
