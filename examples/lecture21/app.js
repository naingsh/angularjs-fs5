(function(){

  angular.module('ShoppingListServiceApp',[])
  .controller('ShoppingListController1', shoppingListController1)
  .controller('ShoppingListController2', shoppingListController2)
  .factory('ShoppingListFactory', ShoppingListFactory);

shoppingListController1.$inject = ['ShoppingListFactory']
  function shoppingListController1(ShoppingListFactory) {
    var list1 = this;
    var shoppingList = ShoppingListFactory();
    list1.name="";
    list1.quantity="";
    list1.addItem = function(){
      shoppingList.addItem(list1.name,list1.quantity);
    };
    list1.items = shoppingList.getItems();
    list1.removeItem = function(index){
      shoppingList.removeItem(index);
    };
  }

shoppingListController2.$inject=['ShoppingListFactory'];
  function shoppingListController2(ShoppingListFactory){
    var list2 = this;
    var limit = 3;
    var shoppingList = ShoppingListFactory(limit);
    list2.name = "";
    list2.quantity = "";
    list2.items = shoppingList.getItems();
    list2.addItem = function(){
      try{
        shoppingList.addItem(list2.name,list2.quantity);
      }catch(error){
          list2.errorMsg = 'Max Item Limit ('+ limit + ') Reached';
      }
      list2.removeItem = function(index){
        shoppingList.removeItem(index);
      }
    }
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

    function ShoppingListFactory(){
      var factory = function(maxItem){
        return new ShoppingListService(maxItem);
      };
      return factory;
    }
  }
)();
