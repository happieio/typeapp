/// <reference path="../../typedefs/tsd.d.ts" />

import con = require('app/constants');
import lodash = require('lib/util/lodash');
import contactState = require('app/state/contact');
import dal = require('lib/data/db/api');

declare var emit;

class dashboardController {
    static moduleName = 'dashboardController';
    static templateUrl = 'comp/dashboard/view.tpl.html';

    private testOutput = 'run a test';

    private $scope;
    private _;
    private $state;
    private dal:dal;

    static $inject:string[] = [con.ng.$scope, lodash.moduleName, con.ng.$state, dal.moduleName];

    constructor($scope, _, $state, dal) {
        this.$scope = $scope;
        this._ = _;
        this.$state = $state;
        this.dal = dal;

        this.$scope.vm = this;
    }

    upsertDoc() {
        this.dal.upsertDoc({_id: '123', data: 'test'}, {})
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    getDoc() {
        this.dal.getDoc('123', {})
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    allDocs() {
        return this.dal.allDocs({include_docs: true})
            .then((success)=> {
                this.$scope.$applyAsync(()=> {
                    if (success.rows[0].doc) this.testOutput = 'first doc returned \n\n' + JSON.stringify(success.rows[0].doc, null, '\t');
                    else this.testOutput = JSON.stringify(success, null, '\t')
                });
            })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    activeTasks() {
        this.dal.activeTasks()
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    bulkDocs() {
        var array = [];
        for(var i = 0; i < 2000; i++){
            array.push({type: Math.random().toString(), more: 123})
        }

        this.dal.bulkDocs({docs: array})
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    startTwoWayReplication() {
        this.dal.startTwoWayReplication()
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    cancelTwoWayReplication() {
        this.dal.cancelTwoWayReplication({}, {})
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    buildView() {
        this.dal.upsertDoc({
                _id: '_design/view1',
                views: { by_type: { map: function mapFun(doc) {emit(doc.type);}.toString() } }
            }, {})
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }

    getView(){
        this.dal.getView()
            .then((success)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(success, null, '\t')}); })
            .catch((err)=> { this.$scope.$applyAsync(()=> {this.testOutput = JSON.stringify(err)}); });
    }


    navToContacts() { this.$state.go(contactState.state.name); }

    static dashController = angular.module(dashboardController.moduleName, []).controller(dashboardController.moduleName, dashboardController);
}

export = dashboardController;