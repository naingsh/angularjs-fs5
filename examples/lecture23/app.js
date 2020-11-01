(function(){

  angular.module('ShoppingListServiceApp',[])
  .controller('ShoppingListController', shoppingListController)
  // .factory('ShoppingListFactory', ShoppingListFactory);
  .provider('ShoppingListService', ShoppingListServiceProvider)
  .config(Config);

  Config.$inject = ['ShoppingListServiceProvider'];
  function Config(ShoppingListServiceProvider){
    ShoppingListServiceProvider.defaults.maxItem = 2;
  }

  shoppingListController.$inject = ['ShoppingListService'];
  function shoppingListController(ShoppingListService){
    var list = this;
    var shoppingList = ShoppingListService;
    list.name = ""; list.quantity="";
    list.items = shoppingList.getItems();
    list.addItem = function(){
      try{
      shoppingList.addItem(list.name,list.quantity);
    }catch (error){
      list.errorMsg = error.message;
    }
    };
    list.removeItem = function(index){
      shoppingList.removeItem(index);
      if(list.items.length!=ShoppingListService.maxItem){
        list.errorMsg=undefined;
      }
    };
    // var scope = $scope;
    // list.showWatchers=function(){
    //   console.log(scope.$$watchers);
    // }
  }

  function ShoppingListService(maxItem) {
    var service = this;
    var items = [];
    service.getItems = function(){
      return items;
    }
    service.removeItem = function(index){
      items.splice(index,1);
    }
    service.addItem = function(itemName,itemQuantity){
        if( maxItem===undefined || ( maxItem!==undefined && items.length<maxItem) ){
          var item = {
            name: itemName,
            quantity: itemQuantity
          };
          items.push(item);
        }else{
            throw new Error('Max Item Limit ('+maxItem+') reached!');
        }
    };
    }

function ShoppingListServiceProvider(){
  var provider = this;
  provider.defaults = {
    maxItem: 10
  };
  provider.$get = function(){
    var shoppingList = new ShoppingListService(provider.defaults.maxItem);
    return shoppingList;
  };
}

//Service Factory
// function ShoppingListFactory(){
//   var factory = function(maxItem){
//     return new ShoppingListService(maxItem);
//   };
//   return factory;
// }
  }
)();
