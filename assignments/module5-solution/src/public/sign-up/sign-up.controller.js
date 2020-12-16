(function(){
    'use strict';
    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['ApiPath','$http','SignUpService'];
    function SignUpController(ApiPath,$http,SignUpService){
        var reg = this;
        var service = SignUpService;
        reg.saved=false;
        reg.submit = function(){
   var itemParam = '/'+reg.user.shortName.toUpperCase()+'.json';
        $http.get(ApiPath+'/menu_items'+itemParam).then(function(response){
            reg.invalidItem = false;
    service.saveData(reg.user,response.data);
            reg.savedMsg = true;
             }).catch(function(error){
               reg.invalidItem = true;
            });

        };
    }
})();