'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', function ($filter, ContactDAO) {
    var ctrl = this;
    this.selected = undefined;

    this.getContacts = function (typedValue) {
        ContactDAO.getAll().then(function (data) {
            ctrl.data = data[typedValue];

        });
    };

    this.selectContact = function (item, model, label) {
        this.selected = item;
    };


});