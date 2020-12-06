(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
    function RoutesConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home',{
            url: '/',
            templateUrl: 'src/shoppinglist/templates/home.template.html'
        }).state('mainList',{
            url: '/main-list',
            templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
            controller: 'ShoppingListController as mainList'
        });
    };
})();