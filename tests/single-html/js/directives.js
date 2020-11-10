(function() {
  'use strict';
  angular.module('directivesApp',[])
  .controller('directivesCtrl',directivesCtrl)
  .directive('myCustomer', MyCustomer);


  function MyCustomer() {
    return {
      templateUrl: 'snippets/directivesSnippet.html',
      restrict: 'E',
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
    // $scope.tag='';
    // console.log(MyCustomer());
  }

}());
