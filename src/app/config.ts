/// <reference path="../typedefs/tsd.d.ts" />

import con = require('app/constants');

class appConfig {
    static main = [
        con.ionic.$ionicConfigProvider,
        ($ionicConfigProvider) => {

            $ionicConfigProvider.platform.android.scrolling.jsScrolling(false);
        }];

}

export = appConfig;