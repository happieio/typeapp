/**@namespace jnDashboard
 * @desc More or less a place holder view for tests and partial implemented features.
 * It will eventually have a congruent purpose with the production app.
 */

/// <reference path="../../typedefs/tsd.d.ts" />

import dashController = require('comp/dashboard/controller');

class Dashboard {
    static moduleName = () =>  'jn.dashboard';
}

angular.module(Dashboard.moduleName(), [
    dashController.moduleName()
]);

export = Dashboard;
