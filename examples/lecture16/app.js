(function(){
'use strict'
  angular.module('bindingApp',[]).controller('bindingCtrl',bindingCtrl);

  bindingCtrl.$inject = ['$scope'];
  function bindingCtrl($scope){
    $scope.firstName = "Gyro";
    // $scope.fullName = "";

    $scope.showWatchers = function(){
      console.log("# of watchers: ", $scope.$$watchersCount);
    };
    $scope.setFullName = function(){
      $scope.fullName = $scope.firstName + " " + "Zeppli";
    };
    $scope.logFirstName = function(){
      console.log("First Name: ", $scope.firstName);
    };
    $scope.logFullName = function(){
      console.log("Full Name: ", $scope.fullName);
    };
  };

})();
