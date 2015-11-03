/// <reference path="../../typedefs/tsd.d.ts" />

import lodash = require('lib/util/lodash');
import uri = require('lib/util/uri');


class jnLibUtilities {
    static moduleName = 'lib.utilities';


    static jnLibUtil = angular.module(jnLibUtilities.moduleName, [
        lodash.moduleName,
        uri.moduleName
    ]);
}

export = jnLibUtilities;


