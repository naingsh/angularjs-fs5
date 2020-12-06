(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ItemDetailController',ItemDetailController);

    ItemDetailController.$inject = ['$stateParams','items','$timeout'];
    function ItemDetailController($stateParams,items,$timeout){
        var itemDetail = this;
        var item = items[$stateParams.itemId];
        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
    }
})();