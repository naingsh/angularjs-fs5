
var shoppingListA = ["Milk", "Donuts", "Cookies",
"Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"];
  (function(){

      angular.module('searchList', []).controller('searchCtrl',searchCtrl);
      searchCtrl.$inject = ['$scope','$filter'];
      function searchCtrl($scope,$filter){
    $scope.shoppingList = shoppingListA;
    $scope.searchItem="";
    $scope.log = function($event){
      if($event.keyCode!=0){
        $scope.shoppingList = $filter('filter')(shoppingListA,$scope.searchItem);
    }else if ($event.keyCode==0){
      $scope.shoppingList=shoppingListA;
    }
    }
      }
  })();
