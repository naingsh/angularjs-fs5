(function () {
    'use strict';

    angular.module('ShoppingListApp')
    .service('WeightLossFilterService',WeightLossFilterService);
    
    WeightLossFilterService.$inject = ['$q','$timeout'];
    function WeightLossFilterService($q,$timeout){
        var service = this;
        service.checkName = function(name){
            var deferred = $q.defer();
            $timeout(function(){
                var result = {
                    message:''
                };
                if(name.toLowerCase().indexOf('cookie')===-1){
                    deferred.resolve(result);
                }else deferred.reject(result);
            }, 3000);
            return deferred.promise;
        }
    }

}());