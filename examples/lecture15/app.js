(function(){

  angular.module("counterApp",[]).controller('counterCtrl', counterCtrl);

  counterCtrl.$inject = ['$scope','$timeout'];
  function counterCtrl($scope,$timeout){
    $scope.count = 0;
    $scope.counter = function(){
      $timeout(function(){
        $scope.count++;
        console.log('counter incremented');
      }, 1000);
    }

    $scope.showWatchers = function(){
      console.log("# number of watchers: ", $scope.$$watchersCount);
      console.log("List of watchers: ", $scope.$$watchers);
    }

    $scope.$watch(function(){
      console.log("digest loop fired");
    });

//$digest
    // $scope.counter = function(){
    //   setTimeout(function(){
    //     $scope.count++;
    //     console.log("count incremented");
    //     $scope.$digest();
    //   }, 2000);
    // }
//$apply
    // $scope.counter = function(){
    //   setTimeout(function(){
    //     $scope.$apply(function(){
    //       $scope.count++;
    //       console.log("count incremented");
    //     });
    //   }, 1000);
    // }

  }
})();
