(function () {
'use strict';

angular.module('ShoppingListDirectiveApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.component('shoppingList', {
  templateUrl: 'shoppingList.html',
  bindings:{
    items: '<',
    myTitle: '@title',
    onRemove: '&',
    badRemove: '='
  },
  controller: ShoppingListComponentController
});

function ShoppingListComponentController($element) {
  var $ctrl = this;
  var totalItems;var anotherTitle;
  $ctrl.cookiesInList = function () {
    for (var i = 0; i < $ctrl.items.length; i++) {
      var name = $ctrl.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };

  $ctrl.remove = function(myIndex){
    $ctrl.onRemove({index: myIndex});
  }
  $ctrl.$onInit = function () {
    console.log('in init');
    totalItems=0;
    anotherTitle='';
  };
  $ctrl.$onChanges = function (changes) {
    console.log(changes);
  };
  // $ctrl.$postLink = function(){
  //   $scope.$watch('$ctrl.cookiesInList()',function(newValue,oldValue){
  //     console.log($element);
  //     if(newValue===true){
  //         var warning = $element.find('div.error');
  //         warning.slideDown(900);
  //     }else {
  //       $element.find('div.error').slideUp(900);
  //     }
  //   });
  // }
  $ctrl.$doCheck = function(){
    // console.log(totalItems);
    if($ctrl.items.length!==totalItems){
      console.log('# of items changed. Checking For Cookies!');
      totalItems = $ctrl.items.length;
      if($ctrl.cookiesInList()){
        console.log('oh no,cookies');
        $element.find('div.error').slideDown(900);
      }else{
        console.log('oh yes,no cookies');
        $element.find('div.error').slideUp(900);
      }
    }
    if($ctrl.myTitle!==anotherTitle){
      console.log('previous title: ',anotherTitle);
      console.log('current title: ',$ctrl.myTitle);
      console.log('title changed, checking..');
      anotherTitle=$ctrl.myTitle;
    }
  };
}


ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  };
list.logItems = function(){
  console.log(list.items);
}
  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + list.items.length + " items )";
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
