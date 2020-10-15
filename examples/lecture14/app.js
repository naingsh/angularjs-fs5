    (function(){

    angular.module('watcherApp',[]).controller('watchCtrl', watchCtrl);

    watchCtrl.$inject = ['$scope'];

    function watchCtrl($scope){

    $scope.showNumOfWatchers = function(){
      console.log("# of watchers: ",$scope.$$watchersCount);
    };
    $scope.showListOfWatchers = function(){
      console.log("list of watchers: ",$scope.$$watchers);
    };
    $scope.onceCounter = 0; //1st watcher
  	$scope.incrementCounter = 0; //2nd watcher
    $scope.name = "Naing";    //3rd watcher //also 5th watcher, result of interpolation {{name}}
    $scope.countOnce = function(){
      $scope.onceCounter = 1;
    };
    $scope.countIncrement = function(){
  	$scope.incrementCounter++;
    }
  //watcher //actually, this IS the 4th watcher
  $scope.$watch(function(){
    console.log("digest loop fired!");
  });


  // custom watcher
  //using $watch in controller is a bad practice
  //since controller have their own way of watching changes
    // $scope.$watch('onceCounter', function(newValue, oldValue){
    //   console.log("once counter old value: ", oldValue);
    //   console.log("once counter new value: ", newValue);
    // });
    // $scope.$watch('incrementCounter',function(newValue,oldValue){
  	// console.log("increment counter old value: ",oldValue);
  	// console.log("increment counter new value: ",newValue);
    // });
  }

    })();
