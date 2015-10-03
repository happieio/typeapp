/// <reference path="../../typedefs/tsd.d.ts" />

import lodash = require('lib/util/lodash');


class jnLibUtilities {
    static moduleName = 'lib.utilities';


    static jnLibUtil = angular.module(jnLibUtilities.moduleName, [
        lodash.moduleName
    ]);
}

export = jnLibUtilities;


