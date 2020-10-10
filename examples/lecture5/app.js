(function(){

angular.module('textApp',[])
.controller('textCtrl', function($scope){
$scope.name=function(){
  return "Megumin";
};
$scope.type="Google";
});
})();
