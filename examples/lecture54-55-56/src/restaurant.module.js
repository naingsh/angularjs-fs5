(function(){

    angular.module('restaurant',['public','common'])
    .config(Config);

    Config.$inject = ['$urlRouterProvider'];
    function Config($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    }
})();