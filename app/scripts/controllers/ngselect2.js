'use strict';

/**
 * @ngdoc function
 * @name ngselect2App.controller:Ngselect2Ctrl
 * @description
 * # Ngselect2Ctrl
 * Controller of the ngselect2App
 */
angular.module('ngselect2App').controller('Ngselect2Ctrl', function ($scope, $resource, Artist) {
    var ctrl = this;
    ctrl.artists = [];
    ctrl.artistModel = [];


    ctrl.search = function (searchString) {
        Artist.query(searchString.term).then(function (results) {
            ctrl.artists = results.artist.map(function (artist) {
                artist.text = artist.name;
                return  artist;
            });
            var data = { results: ctrl.artists };
            searchString.callback(data);
        });

    };


    // fill with 4 items below
    ctrl.select2options = {
        multiple: true,
        minimumInputLength: 1,
        maximumInputLength: 10,
        placeholder: "Search for a artist",
        query: function (searchString) {
            ctrl.search(searchString)
        }
    };


});