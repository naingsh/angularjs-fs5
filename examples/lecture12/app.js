(function(){

  angular.module('feedApp',[])
  .controller('feedCtrl',stateOfKirby)
  .controller('date', showDate);

  showDate.$inject = ['$scope', '$filter'];
  stateOfKirby.$inject = ['$scope','$filter'];
  function stateOfKirby($scope,$filter){
  $scope.state = "hungry";
  $scope.response = "";
  $scope.feedKirby = function(){
    $scope.state = "fed";
    $scope.response = "";
  };

  $scope.wantsMore = function(){
    $scope.state = "hungry";
    $scope.response = "yes!!";
  };

  $scope.name = "Kirby";
  var msg = "I'm hungry please feed me";
  $scope.msgFiltered = $filter('uppercase')(msg);
  $scope.priceOfMelon = .69;
}

function showDate($scope,$filter){
  $scope.date = new Date("2020-10-13");  //yy/mm/dd  //date object
  $scope.tdy = new Date();
}

})();
