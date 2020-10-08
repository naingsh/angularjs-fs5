(function(){

angular.module('xy', []).controller('xyCtrl',move);

function move($scope){
  $scope.key="";
  $scope.checkKey=function(){
    var ch=$scope.key.charAt($scope.key.length-1);
      switch(ch){
        case 'w': console.log("north");break;
        case 'a': console.log("west");break;
        case 's': console.log("south");break;
        case 'd': console.log("east");break;
        default: console.log("stop");break;
      }
  };
}
})();
