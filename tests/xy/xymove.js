(function(){


angular.module('xy', []).controller('xyCtrl',move);
var count={
  south:0,
  east:0
};
move.$inject = ['$scope'];
function move($scope){
  $scope.key="";
  $scope.checkKey=function(){
    var ch=$scope.key.charAt($scope.key.length-1);
      switch(ch){
        case 'w': console.log("north");
                  north();
                  break;
        case 'a': console.log("west");
                  west();
                  break;
        case 's': console.log("south");
                  south();
                  break;
        case 'd': console.log("east");
                  east();
                  break;
        case '0': var elt=document.querySelector('#car');
                  elt.style.left=0;count.south=0;
                  count.east=0;
                  elt.style.top=0;
        default: console.log("stop");break;
      }
  };
}

function east(){
  var elt=document.querySelector("#car");
  count.east+=10;
  elt.style.left=count.east+"px";
}
function north(){
  var elt=document.querySelector("#car");
  count.south-=10;
  elt.style.top=count.south+"px";
}
function west(){
  var elt=document.querySelector("#car");
  count.east-=10;
  elt.style.left=count.east+"px";
}
function south(){
  var elt=document.querySelector("#car");
  count.south+=10;
  elt.style.top=count.south+"px";
}
})();
