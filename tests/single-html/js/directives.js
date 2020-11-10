(function() {
  'use strict';
  angular.module('directivesApp',[])
  .controller('directivesCtrl',directivesCtrl)
  .controller('adderCtrl',adderCtrl)
  .directive('myCustomer', MyCustomer)
  .directive('myAdder', MyAdder);

  function MyAdder(){
    return {
      templateUrl: 'snippets/directive2NumbersAdding.html',
      scope:{
        adder: '=dir'
      }
    };
  }

  function adderCtrl(){
    var add = this;
    add.firstNum = '';
    add.secondNum = '';
    add.add = function(){
      add.answer=add.firstNum+add.secondNum;
    }
  }
  function MyCustomer() {
    return {
      templateUrl: 'snippets/directivesSnippet.html',
      // restrict: 'E',
      scope: {
        // customerInfo: '@myAttr'
        customerInfo: '@info',
        num: '@numAttr'
      }
      // console.log(scope);
    }
  }

  function directivesCtrl($scope) {
    $scope.naomi = {
      name: "Naomi",
      address: '1600 Amphitheatre'
    };
    $scope.vojta = {
      name: "Vojta",
      address: '3456 Somewhere Else'
    };
  }


}());
