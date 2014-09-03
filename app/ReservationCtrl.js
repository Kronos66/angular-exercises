(function () {
    'use strict';
    function ReservationCtrl($filter,$scope) {
        var ctrl = this;

        ctrl.list = {
            selectRefreshment: {value: ''},
            selectZone: {value: ''}
        };

        ctrl.refreshments = [
            {value: 1, status: 'yes'},
            {value: 2, status: 'no'}
        ];

        ctrl.zones = [
            {value: 1, color: 'White'},
            {value: 2, color: 'Blue'},
            {value: 3, color: 'Red'},
            {value: 4, color: 'Green'},
            {value: 5, color: 'Black'}
        ];

        ctrl.isSummary = false;
        this.showSummary = function () {
            ctrl.isSummary = !ctrl.isSummary;
        };

        ctrl.formData = {};

        this.save = function(){
            ctrl.formData = {
                firstName: ctrl.list.firstName,
                lastName: ctrl.list.lastName,
                email: ctrl.list.email,
                selectRefreshment: ctrl.list.selectRefreshment,
                selectZone: ctrl.list.selectZone,
                vip: ctrl.list.vip,
                date: ctrl.list.date,
                comments: ctrl.list.comments
            };
        };
        ctrl.showStatusRefreshment = function () {
            var selected = $filter('filter')(ctrl.refreshments, {value: ctrl.list.selectRefreshment});
            return (ctrl.list.selectRefreshment && selected.length) ? selected[0].status : 'Not set';
        };


        $scope.$watchCollection('[reservation.list.firstName, reservation.list.lastName,reservation.list.email,reservation.list.selectRefreshment,' +
            'reservation.list.selectZone,reservation.list.vip,reservation.list.date,reservation.list.comments]', function () {
            ctrl.save()
        });
    }


    var module = angular.module('exerciseApp', ["xeditable", "ui.bootstrap"]);
    module.controller('ReservationCtrl', ['$filter','$scope', ReservationCtrl]);
})();
