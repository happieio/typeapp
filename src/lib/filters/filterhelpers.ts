/// <reference path="../../typedefs/tsd.d.ts" />

import lodash = require('lib/util/lodash');

/** description */
class generalFilterHelpers {
    static moduleName = 'jnFilterHelpers';
    _:_.LoDashStatic;

    static $inject:string[] = [lodash.moduleName];
    constructor(_){
        this._ = _;
    }

    statusFilter(cards, filterStatus) { return this._.where(cards, {display: {status: filterStatus}}); }

    search(arrayToSearch, filterSearch) {
        var delimitedSearch = this._.words(filterSearch);
        return this._.filter(arrayToSearch, (card) => {
            var concatMatchString = '';
            var limitedFields = this._.omit(card, [
                '_id', '_record', '_rev',
                '$$hashKey',
                'calendar_color', 'color', 'couch_id', 'created_by', 'customer',
                'id', 'image_url',
                'jnid',
                'number',
                'recid',
                'sales_rep'
            ]);
            this._.each(limitedFields, (field:string) => {
                if (this._.isString(field)) concatMatchString = concatMatchString.concat(field);
            });

            concatMatchString = concatMatchString.toLowerCase();
            var isMatch = false;
            this._.each(delimitedSearch, (word) => {
                if (this._.includes(concatMatchString, word.toLowerCase()) ||
                    this._.includes(concatMatchString, filterSearch)) {
                    isMatch = true;
                    return false; //match found, short circuit iterator
                }
            });
            if (isMatch) return card;
        });
    }

    sort(cards, filterSort) {
        return this._.sortBy(cards, (card:any) => {
            if (this._.isEqual(filterSort, 'firstname')) return card.first_name ? card.first_name.toLowerCase() : '';
            else if (this._.isEqual(filterSort, 'lastname')) return card.last_name ? card.last_name.toLowerCase() : '';
            else if (_.isEqual(filterSort, 'datecreated')) return card.date_created;
            else if (_.isEqual(filterSort, 'dateupdated')) return card.date_updated;
        });
    }

    order(cards, filterOrder) {
        var newCardOrder = cards;
        if (filterOrder === 'desc') newCardOrder = cards.reverse();
        return newCardOrder;
    }
    static angularModule:ng.IModule = angular.module(generalFilterHelpers.moduleName, []).service(generalFilterHelpers.moduleName, generalFilterHelpers);
}

export = generalFilterHelpers;