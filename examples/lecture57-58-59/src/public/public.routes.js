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
        })
        .state('public.menu',{
            url: '/menu',
            templateUrl: 'src/public/menu/menu.html',
            controller: 'MenuController',
            controllerAs: 'menuCtrl',
            resolve: {
                menuCategoriesData: ['MenuService',function(MenuService){
                    return MenuService.getMenuCategories();
                }]
            }
        })
        .state('public.items',{
            url: '/menu/{categoryItems}',
            templateUrl: 'src/public/single-category/single-category.html',
            controller: 'SingleCategoryController',
            controllerAs: 'singleCtrl',
            resolve: {
                items: ['MenuService','$stateParams',
                function(MenuService,$stateParams){
                    return MenuService.getSingleCategory($stateParams.categoryItems);
                }]
            }
        });
    }
})();