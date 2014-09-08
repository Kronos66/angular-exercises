'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', function (ContactDAO) {
    var ctrl = this;
    this.selected = undefined;

    this.getContacts = function () {
        ContactDAO.getAll().then(function (data) {
            ctrl.data = data;

        });
    };

    this.selectContact = function (item) {
        this.selected = item;
    };


});