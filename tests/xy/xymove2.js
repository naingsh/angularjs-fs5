(function(){

angular.module('xy', []).controller('xyCtrl', xyController);

xyController.$inject = ['$scope'];
var count={
  east:0,south:0
};
function xyController($scope){

$scope.key="";
$scope.pressedKeys={};
$scope.checkKey=function(){
};


function east(){
  var elt=document.querySelector("#car");
  count.east++;
  elt.style.left=count.east+"px";
}
function north(){
  var elt=document.querySelector("#car");
  count.south--;
  elt.style.top=count.south+"px";
}
function west(){
  var elt=document.querySelector("#car");
  count.east--;
  elt.style.left=count.east+"px";
}
function south(){
  var elt=document.querySelector("#car");
  count.south++;
  elt.style.top=count.south+"px";
}
}
})();
