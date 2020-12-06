(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ItemDetailController',ItemDetailController);

    ItemDetailController.$inject = ['item'];
    function ItemDetailController(item){
        var itemDetail = this;
        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
    }
})();