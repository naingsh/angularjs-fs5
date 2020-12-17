(function(){
    'use strict';
    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject = ['ApiPath','SignUpService']
    function MyInfoController(ApiPath,SignUpService){
        var service = SignUpService;
        var $ctrl = this;
        $ctrl.userData = service.getMyInfo();
        $ctrl.basePath = ApiPath;
    }
})();