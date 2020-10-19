(function(){

  angular.module('ShoppingListServiceApp',[])
  .controller('AddItemController', addItemController)
  .controller('ShowItemController', showItemController)
  .service('ShoppingListService', ShoppingListService);

addItemController.$inject = ['ShoppingListService']
  function addItemController(ShoppingListService) {
    var itemAdder = this;
    itemAdder.name="";
    itemAdder.quantity="";
    itemAdder.addItem = function(){
      ShoppingListService.addItem(itemAdder.name,itemAdder.quantity);
    }
  }

showItemController.$inject = ['ShoppingListService'];
  function showItemController(ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getItems();
    showList.removeItem = function(index){
      ShoppingListService.removeItem(index);
    };
  }

  function ShoppingListService() {
    var service = this;

    var items = [{name:"Cola",quantity:2}];

    service.addItem = function(itemName,itemQuantity){
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
    };

    service.getItems = function(){
      return items;
    }

    service.removeItem = function(index){
      items.splice(index,1);
    };

    }
  }
)();
