/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import lodash = require('lib/util/lodash');
import contactState = require('app/state/contact');
import dal = require('lib/data/db/api');

class dashboardController {
    static moduleName = 'dashboardController';
    static templateUrl = 'comp/dashboard/view.tpl.html';

    private testOutput = 'run a test';

    private $scope;
    private _;
    private $state;
    private dal:dal;

    static $inject:string[] = [con.ng.$scope, lodash.moduleName, con.ng.$state, dal.moduleName];
    constructor($scope, _, $state, dal){
        this.$scope = $scope;
        this._ = _;
        this.$state = $state;
        this.dal = dal;

        this.$scope.vm = this;
    }

    putDoc(){
        this.dal.putDoc({_id:'123',data:'test'},{})
            .then((success)=>{ this.$scope.$applyAsync(()=>{JSON.stringify(success)}); })
            .catch((err)=>{ this.$scope.$applyAsync(()=>{JSON.stringify(err)});  });
    }

    getDoc(){
        this.dal.getDoc('123',{})
            .then((success)=>{ this.$scope.$applyAsync(()=>{JSON.stringify(success)}); })
            .catch((err)=>{  this.$scope.$applyAsync(()=>{JSON.stringify(err)});  });
    }

    allDocs(){
        return this.dal.allDocs({limit:3})
            .then((success)=>{ this.$scope.$applyAsync(()=>{JSON.stringify(success)}); })
            .catch((err)=>{  this.$scope.$applyAsync(()=>{JSON.stringify(err)});  });
    }



    navToContacts() { this.$state.go(contactState.state.name); }

    static dashController = angular.module(dashboardController.moduleName, []).controller(dashboardController.moduleName, dashboardController);
}

export = dashboardController;