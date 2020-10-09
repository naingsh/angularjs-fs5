(function(){

  angular.module('DIApp',[]).controller('DICtrl', DIController);

  function DIController($scope, $filter, $injector){
    $scope.name = "Megumin";

    $scope.upper = function upCase(){
      var flt = $filter('uppercase');
      $scope.name = flt($scope.name);

      var inject = $injector.annotate(DIController);
//the above code is how angularjs search out services it needs to include when it instantiate a function
      console.log(inject);
    }

    var someFunc = function(name, age, sex){
      return "may you be happy";
    };
    console.log(someFunc.toString());
    console.log($injector.annotate(someFunc));
  }

})();
