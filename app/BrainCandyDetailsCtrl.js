(function ()
{
    'use strict';
    function BrainCandyDetailsCtrl(CandyDAO,$routeParams)
    {
        var ctrl=this;
        ctrl.buttonSave=false;
        CandyDAO.get($routeParams.id).then(function(result){
            ctrl.details=result;
        });
        ctrl.saveCandy=function(){
            CandyDAO.save(ctrl.details);
        }

    }

    var module = angular.module("exerciseApp");
    module.controller('BrainCandyDetailsCtrl', ['CandyDAO','$routeParams', BrainCandyDetailsCtrl]);
})();