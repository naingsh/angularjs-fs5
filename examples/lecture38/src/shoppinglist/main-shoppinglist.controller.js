(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ShoppingListController',ShoppingListController);

    ShoppingListController.$inject = ['items'];
    function ShoppingListController(items){
        var mainList = this;
        mainList.items = items;
        // mainList.$onInit = function(){
        //     ShoppingListService.getItems().then(
        //         function(result){
        //             mainList.items = result;
        //         }
        //     );
        // };
    }
})();