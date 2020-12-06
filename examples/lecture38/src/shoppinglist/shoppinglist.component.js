(function(){
    'use strict';

    angular.module('ShoppingListApp')
    .component('shoppingList',{
        templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
        bindings: {
            items: '<'
        }
    });
})();