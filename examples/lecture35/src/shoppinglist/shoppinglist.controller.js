(function(){
    'use strict';
    angular.module('ShoppingListApp')
    .controller('ShoppingListCtrl',ShoppingListController);

    ShoppingListController.$inject = ['ShoppingListFactory'];
    function ShoppingListController(ShoppingListFactory){
        var list = this;
        var shoppingList = ShoppingListFactory();
        list.itemName = '';list.itemQty='';
        list.items = shoppingList.getItems();
        var originalTitle = 'Shopping List ';
        var titleUpdate = function(){
            list.title = originalTitle+'('+list.items.length+') items';
        };
        titleUpdate();
        list.addBtn = function(){
            shoppingList.addItem(list.itemName,list.itemQty);
            titleUpdate();
        };
        list.removeBtn = function(index){
            shoppingList.removeItem(index);
            titleUpdate();
        }
    }

})();