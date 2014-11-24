(function ()
{
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO)
    {
        var ctrl=this;

        AnnouncementDAO.query().then(function(announce){
            ctrl.announcements=announce;
        })
    }

    var module = angular.module("exerciseApp");
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO', AnnouncementListCtrl]);

})();