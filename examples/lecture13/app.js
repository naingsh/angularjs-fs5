  (function(window){

    angular.module('feedApp',[])
    .controller('feedCtrl',stateOfKirby)
    .filter('loves', LoveFilterFactory)
    .filter('fruit', fruitFilterFactory)
    .filter('truth', TruthFilter);

  stateOfKirby.$inject = ['$scope','lovesFilter','fruitFilter','truthFilter'];
  function stateOfKirby($scope,lovesFilter,fruitFilter,truthFilter){
  $scope.state = "hungry";
  $scope.response = "";
  $scope.feedKirby = function(){
    $scope.state = "fed";
    $scope.response = "";
  };
  $scope.sayMsg = function(){
    var msg = "Kirby likes watermelon";
    return msg;
  };

  $scope.sayFilteredMsg = function(){
    var msg = "Kirby likes watermelon";
    msg = lovesFilter(msg);
    return msg;
  };

var extMsg = "Kirby likes watermelon";
  $scope.replacedFruitMsg = function(){
    var msg = "Kirby likes watermelon";
    msg = fruitFilter(msg);
    return msg;
  };

  $scope.doubleFilteredMsg = function(){
    extMsg = lovesFilter(extMsg); //msg is already filtered in above "replacedFruitMsg" function
    extMsg = fruitFilter(extMsg);
    return extMsg;
  };

  $scope.truthBtn = function(){
    $scope.truthMsg = "Kirby likes watermelon";
    var target = "likes";
    var replace = "is";
    $scope.truthMsg = truthFilter($scope.truthMsg,target,replace);
    $scope.truthMsg = truthFilter($scope.truthMsg,"watermelon","horny af");
  };

  $scope.truthCloseBtn = function(){
    $scope.truthMsg = "";
  };

  $scope.wantsMore = function(){
    $scope.state = "hungry";
    $scope.response = "yes!!";
  };
$scope.showWatchers = function(){
  console.log("# of watchers: ", $scope.$$watchersCount);
  console.log("List of watchers: ",$scope.$$watchers);
};
  }

    function LoveFilterFactory(){
      return function(input){
        input = input || "";  //if there's nth in "input" make it empty variable
        input = input.replace("likes", "loves");  //replace likes with loves
        return input;
      };
    }
    function fruitFilterFactory(){
      return function(input){
        input = input || "";
        input = input.replace("watermelon","banana");
        return input;
      };
    }
    function TruthFilter(){
      return function(input,target,replace){
        input = input || "";
        input = input.replace(target,replace);
        return input;
      };
    }
  })();
