(function() {
  'use strict';
  angular.module('shoppingListApp',[])
  .controller('ShoppingListController1',ShoppingListController1)
  .factory('ShoppingListServiceFactory',ShoppingListServiceFactory)
  .directive('shoppingList',shoppingList)
  .directive('shoppingListDir',shoppingListDirective);

function shoppingListDirective() {
  return {
    templateUrl: 'shoppingList.html',
    scope: {
      error: '<',
      items: '<',
      title: '@',
      remove: '<'
    },
    controller: shoppingListDirCtrl,
    controllerAs: 'bruh',
    bindToController: true
  };
}

function shoppingListDirCtrl() {
  var list = this;
  list.checkCookies = function(){
    for(var i=0;i<list.items.length;i++){
      if(list.items[i].name.toLowerCase().indexOf('cookie')!==-1)
      {
        return true;
      }
    }
    return false;
  };
}
  function shoppingList() {
    return {
      templateUrl: 'shoppingList.html',
      scope:{
        bruh: '=myList'
      }
    }
  }

  function ShoppingListController1(ShoppingListServiceFactory) {
    var list = this;
    var service = ShoppingListServiceFactory(3);
    list.name='';list.quantity='';
    list.items = service.getItems();
    var orgtitle = "Shopping List";
    list.title=orgtitle+' ('+list.items.length+')';

    list.addItem = function(){
      try{
      service.addItem(list.name,list.quantity);
  list.title=orgtitle+' ('+list.items.length+')';
}catch(error) {
  list.error = error.message;
}
    }

    list.removeItem = function(index){
      service.removeItem(index);
        list.title=orgtitle+' ('+list.items.length+')';
    }

  }

  function ShoppingListService(maxItem) {
    var service = this;
    var items = [];
    service.maxItem = function(){
      return maxItem;
    }
    service.getItems = function(){
      return items;
    }

    service.addItem = function(name,quantity){
      if(maxItem==undefined || maxItem!=undefined && items.length<maxItem){
      var item = {
        name: name,
        quantity: quantity
      };
      items.push(item);
    }else throw new Error('Limit Reached');
    }

    service.removeItem = function(index){
      items.splice(index,1);
    }

  }

  function ShoppingListServiceFactory() {
    return function(maxItem){
      return new ShoppingListService(maxItem);
    }
  }
}());
