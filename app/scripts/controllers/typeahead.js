'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', ['ui.bootstrap'], function ($filter, ContactDAO) {

    this.selected = undefined;
    ContactDAO.getAll();
    this.getContacts=function(typedValue){
	// need to write this function body
    }

    this.selectContact=function(item,model,label){
        this.selected=item;
    }
});