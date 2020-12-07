(function(){
    angular.module('FormApp',[])
    .controller('FormController',FormController);

    function FormController(){
        var reg = this;
        reg.submit = function(){
            reg.completed = true;
        }
    }
})();