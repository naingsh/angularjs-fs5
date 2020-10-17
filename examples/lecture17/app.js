var shoppingList1 = ["Ballon","Nail File","Hair Tie","Spoon","CD","Doll",
"Eyeliner","Picture Frame","Sun Glasses","Greeting Card"];

var shoppingList2 = [
    {
      name: "Ballon",
      quantity: 1000
    },
    {
      name: "CD",
      quantity: 10
    },
    {
      name: "Sun Glasses",
      quantity: 2
    },
    {
      name: "Picture Frame",
      quantity: 69
    },
    {
        name: "Orange",
        quantity: 50
    }
];

(function(){
  angular.module('shoppingApp', []).controller('shoppingCtrl', shoppingCtrl);
  shoppingCtrl.$inject = ['$scope'];
  function shoppingCtrl($scope){
    $scope.list1 = shoppingList1;
    $scope.list2 = shoppingList2;
    $scope.logItems = function(){
      console.log($scope.list2);
      // console.log($scope.$$watchers);
    };
    $scope.addItem = function(){
      $scope.newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.list2.push($scope.newItem);
    };
    $scope.removeItem = function(){
      $scope.list2.pop();
    }
  }

})();
