(function(){

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.itemsList = "";
  $scope.message = "";
  $scope.fontColor = "";
  $scope.borderColor = "";

  $scope.checkItems = function(){

    var strArray = $scope.itemsList.split(',');

    strArray = strArray.filter(filterEmptyItem);  //filter empty item ' '
    strArray = strArray.filter(filterEmptyItem2); //filter empty item ''

    var str = strArray.toString();

    if(strArray.length>3){
      $scope.message = "Too much!";
      $scope.fontColor = "green";
      $scope.borderColor = "green";
    }
    else if(strArray.length<=3 && str!=''){
      $scope.message = "Enjoy!";
      $scope.fontColor = "green";
      $scope.borderColor = "green";
    }
    else if(str==''){
      $scope.message = "Please enter data first";
      $scope.fontColor = "red";
      $scope.borderColor = "red";
    }

function filterEmptyItem(value){
    return value!=' ';  //return non-empty array element
    }
function filterEmptyItem2(value){
    return value!='';   //the same as above
    }

  }

}
})();
