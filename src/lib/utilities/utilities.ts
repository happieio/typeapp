/// <reference path="../../typedefs/tsd.d.ts" />

import lodash = require('lib/utilities/lodash');


class jnLibUtilities {
    static moduleName = () => 'jnLib.utilities';


    static jnLibUtil = angular.module(jnLibUtilities.moduleName(), [
        lodash.moduleName()
    ]);
}

export = jnLibUtilities;


