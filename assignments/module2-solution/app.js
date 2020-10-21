(function(){

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    var listService = ShoppingListCheckOffService;
    buyList.toBuyItems = listService.getItems();
    buyList.bought = function(index){
      listService.moveToBought(index);
    };
  }
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    var listService = ShoppingListCheckOffService;
    boughtList.boughtItems = listService.getBoughtItems();
  }
  function ShoppingListCheckOffService(){
    var service = this;
    var items = [
      {
        name:'cookies',quantity:10
      },{
        name:'apples',quantity:12
      },{
        name:'chocolate bars',quantity:14
      },{
        name:'ramen packs',quantity:69
      },{
        name:'bananas',quantity:5
      }];

    service.getItems = function(){
      return items;
    };

    var boughtItems = [];
    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.moveToBought = function(index){
      boughtItems.push(items[index]);
      items.splice(index,1);
    };

  }
})();
