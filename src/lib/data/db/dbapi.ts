/** @class dal
 * @desc database and business model management service
 */

/// <reference path="../../../typedefs/tsd.d.ts" />

class dalService {
    static moduleName = 'dalService';
}

export = dalService;


angular.module(dalService.moduleName, [])
    .factory(dalService.moduleName, [dal]);

function dal() {
    //ADD YOUR DATA ACCESS LAYER HERE
   var publicAPI = {};

    return publicAPI;
}

