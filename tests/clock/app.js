(function(){

  angular.module('clockApp',[]).controller('clockCtrl',clockCtrl);

  function clockCtrl($scope,$filter,$interval){
    function refresh(){
      $scope.time = new Date();
      $scope.time = $filter('date')($scope.time,'HH:mm:ss');
      // console.log($scope.time);
    }
    $interval(refresh,1000);
  }
})();

// document.addEventListener('DOMContentLoaded',function(){
//
//   var timeDisplay = document.querySelector('#time');
//   function refresh(){
//     var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
//       var formattedString = dateString.replace(", ", " - ");
//       timeDisplay.innerHTML = formattedString;
//   }
//   setInterval(refresh,1000);
// });
