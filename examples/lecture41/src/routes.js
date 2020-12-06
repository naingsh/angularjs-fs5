(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
    function RoutesConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home',{
            url: '/',
            templateUrl: 'src/shoppinglist/templates/home.template.html',
            controller: 'HomeController as home',
            resolve: {
                items: ['$timeout','ShoppingListService',function($timeout,ShoppingListService){
                   return $timeout(function(){
                        return ShoppingListService.getItems();
                    },1200);
                }]
            }
        }).state('mainList',{
            url: '/main-list',
            templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
            controller: 'ShoppingListController as mainList',
            resolve: {
                items: ['ShoppingListService',function(ShoppingListService){
                    return ShoppingListService.getItems();
                }]
            }
        })
        .state('mainList.itemDetail',{
            url: '/item-detail/{itemId}',
            // params: {
            //     itemId: null
            // },
            templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
            controller: 'ItemDetailController as itemDetail',
            // resolve: {
            //     item: ['$stateParams','ShoppingListService',
            //     function($stateParams,ShoppingListService){
            //        return ShoppingListService.getItems().then(
            //             function(result){
            //                 return result[$stateParams.itemId]
            //             }
            //         );
            //     }]
            // }
        });
    };
})();