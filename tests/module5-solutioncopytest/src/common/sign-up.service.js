(function(){
    'use strict';
    angular.module('common')
    .service('SignUpService',SignUpService);

    SignUpService.$inject = [];
    function SignUpService(){
        var user = {};
        var service = this;
        service.saveData = function(submittedData,shortNameData){
            user = submittedData;
            user.data = shortNameData;
        };
        service.getMyInfo = function(){
            return user;
        };
    }
})();