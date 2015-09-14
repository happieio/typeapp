
/// <reference path="../../typedefs/tsd.d.ts" />

class generalFilterHelpers {
    static moduleName = 'jnLib.filters.filterHelpers';
}

export = generalFilterHelpers;

angular.module(generalFilterHelpers.moduleName, [])
    .factory(generalFilterHelpers.moduleName, ['_', filterHelpers]);
function filterHelpers(_) {
    var publicAPI = {
        statusFilter: statusFilter,
        search: search,
        sort: sort,
        order: order
    };


    function statusFilter(cards, filterStatus) {
        var statusFiltered = _.where(cards, {display: {status: filterStatus}});
        return statusFiltered;
    }

    function search(arrayToSearch, filterSearch) {
        var delimitedSearch = _.words(filterSearch);
        return _.filter(arrayToSearch, function (card) {
            var concatMatchString = '';
            var limitedFields = _.omit(card, [
                '$$hashKey', 'id', 'image_url', 'calendar_color', '_id',
                '_record', '_rev', 'sales_rep', 'customer', 'created_by', 'couch_id']);
            _.each(limitedFields, function (field) {
                if (_.isString(field)) {
                    concatMatchString = concatMatchString.concat(field);
                }
            });

            concatMatchString = concatMatchString.toLowerCase();
            var isMatch = false;
            _.each(delimitedSearch, function (word) {
                if (_.includes(concatMatchString, word.toLowerCase()) ||
                    _.includes(concatMatchString, filterSearch)) {
                    isMatch = true;
                    return false; //match found, short circuit iterator
                }
            });
            if (isMatch) {
                return card;
            }
        });
    }

    function sort(cards, filterSort) {
        var sorted = _.sortBy(cards, function (card) {
            if (_.isEqual(filterSort, 'firstname')) {
                return card.first_name ? card.first_name.toLowerCase() : '';
            }
            else if (_.isEqual(filterSort, 'lastname')) {
                return card.last_name ? card.last_name.toLowerCase() : '';
            }
            else if (_.isEqual(filterSort, 'datecreated')) {
                return card.date_created;
            }
            else if (_.isEqual(filterSort, 'dateupdated')) {
                return card.date_updated;
            }
        });
        return sorted;
    }

    function order(cards, filterOrder) {
        if (filterOrder === 'desc') {
            var orderedDesc = cards.reverse();
            return orderedDesc;
        }
        else {
            return cards;
        }
    }

    return publicAPI;
}
