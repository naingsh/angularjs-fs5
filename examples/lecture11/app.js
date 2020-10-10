(function(){

  angular.module('feedApp',[])
  .controller('feedCtrl',stateOfKirby);

stateOfKirby.$inject = ['$scope'];
function stateOfKirby($scope){
$scope.state = "hungry";
$scope.response = "";
$scope.feedKirby = function(){
  $scope.state = "fed";
  $scope.response = "";
};

$scope.wantsMore = function(){
  $scope.state = "hungry";
  $scope.response = "yes!!";
}

}
})();
