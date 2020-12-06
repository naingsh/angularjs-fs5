(function(){
    'use strict';
  var app   =  angular.module('ShoppingListApp')
    .controller('HomeController',HomeController);


    HomeController.$inject=['items'];
    function HomeController(items){
        var home = this;
        home.$onInit = function(){
            home.items = items;
            console.log(home.items);
        }
    }
})();