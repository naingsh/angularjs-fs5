(function(){
    'use strict';
    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['ApiPath','$http','SignUpService','$q'];
    function SignUpController(ApiPath,$http,SignUpService,$q){
        var reg = this;
        var service = SignUpService;
        reg.$onInit = function () {
            reg.savedMsg = false;
            reg.valid = false;
            reg.response;
        };
        reg.validate = function(){
        if(reg.user.shortName!==undefined){
            if(reg.user.shortName.length>1){
                var itemPath = '/'+reg.user.shortName.toUpperCase()+'.json';
                    $http.get(ApiPath+'/menu_items'+itemPath).then(function(response){
                        reg.response=response.data;
                        reg.valid = true;
                    }).catch(function(error){
                        reg.valid = false;
                    });
                }
            }
        };
        reg.submit = function(){
            if(reg.valid){
                service.saveData(reg.user,reg.response);
                reg.savedMsg=true;
            }
        }
//         reg.submit = function(){
//    var itemParam = '/'+reg.user.shortName.toUpperCase()+'.json';
//         $http.get(ApiPath+'/menu_items'+itemParam).then(function(response){
//             reg.invalidItem = false;
//     service.saveData(reg.user,response.data);
//             reg.savedMsg = true;
//              }).catch(function(error){
//                reg.invalidItem = true;
//             });

//         };
    }
})();