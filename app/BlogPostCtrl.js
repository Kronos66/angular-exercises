(function ()
{
    'use strict';
    function BlogPostCtrl(PostDAO)
    {
        var ctrl = this;

        PostDAO.query().then(function (post)
        {
            ctrl.posts = post;
        })

}

var module = angular.module("exerciseApp");
module.controller('BlogPostCtrl', ['PostDAO', BlogPostCtrl]);
})
();
