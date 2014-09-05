'use strict';

/**
 * @ngdoc function
 * @name ngflowApp.controller:NgflowCtrl
 * @description
 * # NgflowCtrl
 * Controller of the ngflowApp
 */
angular.module('ngflowApp').controller('uploadCtrl', function ($scope) {

    var ctrl = this;
    this.flowCompleteFlag = false;
    this.image = undefined;

    this.startUpload = function(flow,files){
        flow.upload();
    };

    this.fileSuccess = function(file,message){
        ctrl.image = JSON.parse(message);
//        console.log(ctrl.image.url);
    };

    this.flowComplete=function(){
        this.flowCompleteFlag = true;
    };

});