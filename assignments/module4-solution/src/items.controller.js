(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsPageController',ItemsPageController);

    function ItemsPageController(response){
        var itemsPage = this;
        itemsPage.items = response.data.menu_items;
        itemsPage.category = response.data.category;
        console.log(itemsPage.items);
    }
})();