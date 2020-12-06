(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ShoppingListController',ShoppingListController);

    ShoppingListController.$inject = ['$filter','$interval','items'];
    function ShoppingListController($filter,$interval,items){
        var mainList = this;
        mainList.items = items;
        mainList.$onInit = function(){
            $interval(function(){
                var time = new Date();
                mainList.time = $filter('date')(time,'mediumTime');
            },1000);
        }
        
        
        // mainList.$onInit = function(){
        //     ShoppingListService.getItems().then(
        //         function(result){
        //             mainList.items = result;
        //         }
        //     );
        // };
    }
})();