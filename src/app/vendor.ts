/// <reference path="../typedefs/tsd.d.ts" />
import con = require('app/constants');

class vendorComponents {
    static moduleName = 'vendor.components';

    static vendorModule = angular.module(vendorComponents.moduleName, [
        con.ionic.ionic,
        con.vendorModules.uiRouter,
        con.vendorModules.ngCordova
    ]);

}
export = vendorComponents;