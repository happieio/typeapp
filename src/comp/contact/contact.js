/**
 * @namespace jnContact
 * @desc the contact view is responsible for initiating {@link boardDataService} functions and supplying the results
 * in a [jnBoard]{@link module:jnBoard} isolate scope via the board isolate scope attribute. The contact view also
 * implements the {@Link contactPopOverCtrl} which requires $scope.board and $scope.openBoard(board.doc._id). A
 * {@Link contactPopOverCtrl} is also implemented and requires contact to implement $scope.statusFilters and
 * $scope.applyFilter(status, statusFilterTypeLiteral). $scope.applyFilter then updates the [jnBoard]{@link module:jnBoard}
 * filter-key and and filter-type two way bound attributes.
 */
define(["require", "exports", 'comp/contact/controller'], function (require, exports, contactController) {
    var Contact = (function () {
        function Contact() {
        }
        Contact.moduleName = 'jn.contact';
        Contact.contact = angular.module(Contact.moduleName, [
            contactController.moduleName
        ]);
        return Contact;
    })();
    return Contact;
});
