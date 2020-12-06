(function(){
    'use strict';
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url:'/',
            templateUrl: 'src/templates/home.template.html'
        })
        .state('categories',{
            url:'/categories',
            templateUrl: 'src/templates/main-categories.template.html',
            controller: 'MainCategoriesController as mainCategories',
            resolve: {
                response: ['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items',{
            url: '/items/{shortName}',
            templateUrl: 'src/templates/itemsPage.template.html',
            controller: 'ItemsPageController as itemsPage',
            resolve: {
                response: ['$stateParams','MenuDataService',
                function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }]
            }
        });
    }
})();