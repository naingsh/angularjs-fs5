(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ItemDetailController',ItemDetailController);

    ItemDetailController.$inject = ['$stateParams','items'];
    function ItemDetailController($stateParams,items){
        var itemDetail = this;
        var item = items[$stateParams.itemId];
        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
    }
})();