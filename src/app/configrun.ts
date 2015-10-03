/// <reference path="../typedefs/tsd.d.ts" />

import con = require('app/constants');

class appRun {
    static main = [con.ionic.$ionicPlatform, con.plugins.$cordovaKeyboard,
        function ($ionicPlatform, $cordovaKeyboard) {
            $ionicPlatform.ready( () => {

                //ALL YOUR INIT LOGIC HERE
                $cordovaKeyboard.hideAccessoryBar(false);
                $cordovaKeyboard.disableScroll(true);
            });
        }];
}

export = appRun;