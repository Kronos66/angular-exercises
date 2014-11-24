(function ()
{
    'use strict';
    function BrainCandyListCtrl(CandyDAO,$routeParams)
    {
        var ctrl = this;
        ctrl.buttonDelete=false;
        var refresh = function(){
            CandyDAO.query().then(function (data)
            {
                ctrl.candies = data;
            });
        };
        refresh();
        ctrl.deleteCandy=function(id){
            CandyDAO.delete(id).then(refresh)
        }
    }

    var module = angular.module("exerciseApp");
    module.controller('BrainCandyListCtrl', ['CandyDAO', BrainCandyListCtrl]);
})();