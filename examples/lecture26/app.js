(function() {
  'use strict';
  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController1',shoppingListCtrlUnlimited)
  .controller('ShoppingListController2',shoppingListCtrlLimited)
  .factory('ShoppingListFactory',ShoppingListFactory)
  .directive('listItemInfo',ListItemInfo)
  .directive('listItem',ListItem)
  .directive('shoppingList',ShoppingList);

  function ListItem(){
    var ddo = this;
    ddo = {
      templateUrl: 'listItemSnippet.html'
    }
    return ddo;
  }
  function ShoppingList(){
    var ddo = this;
    ddo = {
      templateUrl: 'shoppingList.html'
    }
    return ddo;
  }
  function ListItemInfo(){
    var ddo = this;
    ddo = {
      template: '{{item.quantity}} {{item.name}}(s)'
    };
    return ddo;
  }


  function shoppingListCtrlUnlimited(ShoppingListFactory){
      var list = this;
      var service = ShoppingListFactory();
      list.name='';
      list.quantity='';
       list.items = service.getItems();
       list.addItem = function(){
         service.addItem(list.name,list.quantity);
       }
       list.removeItem = function(index){
         service.removeItem(index);
       }
  }

  function shoppingListCtrlLimited(ShoppingListFactory){
    var list = this;
    var limit = 3;
    var service = ShoppingListFactory(limit);
    list.name='';
    list.quantity='';
     list.items = service.getItems();
     list.eMsg='';
     list.addItem = function(){
       try{
       service.addItem(list.name,list.quantity);
     }catch(error){
       list.eMsg = error.message;
     }
     }
     list.removeItem = function(index){
       service.removeItem(index);
       // console.log(service.maxItem);
       if(list.items.length<limit){
         list.eMsg=undefined;
       }
     }
  }

  function ShoppingListService(maxItem){
    var service = this;
    var items=[];
    // service.getItems = function(){
    //   return items;
    // };
    service.addItem = function(name,quantity){
      if(maxItem===undefined || maxItem!==undefined && items.length<maxItem){
        // console.log(items);
      var item = {
        name: name,
        quantity: quantity
      };
      items.push(item);
    }else {
      throw new Error('Limit Reached!');
    }
    };
    service.removeItem = function(index){
      items.splice(index,1);
    };

    service.getItems = function(){
      return items;
    }
  }

  function ShoppingListFactory(){
    var factory = function(maxItem){
      return new ShoppingListService(maxItem);
    }
    return factory;
  }

}());
