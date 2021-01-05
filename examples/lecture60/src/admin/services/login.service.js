(function(){
    'use strict';
    angular.module('admin')
    .service('LoginService',LoginService);

    LoginService.$inject = ['$http',ApiPath];
    function LoginService($http,ApiPath){

    }
})();