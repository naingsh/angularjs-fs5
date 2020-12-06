(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ShoppingListController',ShoppingListController);

    ShoppingListController.$inject = ['ShoppingListService'];
    function ShoppingListController(ShoppingListService){
        var mainList = this;
        mainList.items = [];
        mainList.$onInit = function(){
            ShoppingListService.getItems().then(
                function(result){
                    mainList.items = result;
                }
            );
        };
    }
})();