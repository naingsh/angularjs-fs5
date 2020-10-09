//One way to survive minification
(function(){

  angular.module('DIApp',[]).controller('DICtrl', DIController);

 DIController.$inject = ['$scope','$filter','$injector'];     //<-- method one
  function DIController($scope, $filter, $injector){
    $scope.name = "Megumin";

    $scope.upper = function upCase(){
      var flt = $filter('uppercase');
      $scope.name = flt($scope.name);
//the above code is how angularjs search out services it needs to include when it instantiate a function
    }
  }
})();

//Another way to survive minification
(function(){

  angular.module('DIApp',[]).controller('DICtrl', ['$scope','$filter','$injector',DIController]);   // <-- method two

  function DIController($scope, $filter, $injector){
    $scope.name = "Megumin";

    $scope.upper = function upCase(){
      var flt = $filter('uppercase');
      $scope.name = flt($scope.name);
//the above code is how angularjs search out services it needs to include when it instantiate a function
    }
  }
})();
