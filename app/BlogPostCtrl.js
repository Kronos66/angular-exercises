(function ()
{
    'use strict';
    function BlogPostCtrl()
    {
        this.posts = [{
                         id: 1, author: 'Jack', title: 'Diving Deep with Dependency Injection'
                     }, {
                         id: 2, author: 'Jill', title: 'Practical End-to-End Testing with Protractor'
                     }]
    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl', [BlogPostCtrl]);
})();
