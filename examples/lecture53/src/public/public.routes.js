(function(){
    'use strict';
    angular.module('public')
    .config(publicRouteConfig);

    publicRouteConfig.$inject = ['$stateProvider'];
    function publicRouteConfig($stateProvider){
        $stateProvider.state('public',{
            abstract: true,
            templateUrl: 'src/public/public.html' 
        })
        .state('public.home',{
            url: '/',
            templateUrl: 'src/public/home/home.html'
        });
    }
})();