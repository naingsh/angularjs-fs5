(function(){
  angular.module('clockApp',[])
  .controller('clockCtrl',clock);

  function clock($filter,$interval){
    var clock = this;
    var colors = ['red','green','white','yellow','blue','orange','aqua','maroon','grey','snow','yellowgreen'];
    $interval(updateTime,1000);
    function updateTime(){
    clock.bgC = colors[Math.floor(Math.random()*colors.length)];
    clock.time = new Date();
    clock.time = $filter('date')(clock.time,'HH:mm:ss');
  }
  }
})();
