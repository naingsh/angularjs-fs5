(function () {
    'use strict';

    angular.module('ShoppingListApp')
    .factory('ShoppingListFactory',ShoppingListFactory);
    
    function ShoppingListService(){
        var service = this;
        var items = [];
        service.addItem = function(name, qty){
            var item = {
                name: name,
                quantity: qty
            };
            items.push(item);
        }
        service.getItems = function(){
            return items;
        }
        service.removeItem = function(index){
            items.splice(index,1);
        }
    }

    function ShoppingListFactory(){
        return function(){
            return new ShoppingListService();
        };
    }

}());