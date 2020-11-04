  angular.module('clock',[]).controller('clockctrl',clockctrl);
  function clockctrl($interval,$filter){
    var clock=this;
    $interval(
      () => {
      clock.date=new Date();
      clock.date=$filter('date')(clock.date,'HH:mm:ss');
    },1000);
  }
var myPromise = new Promise(
  (myResolve,myReject) => {
  let x = 0;
  setTimeout(function(){
    if(x==0) myResolve('Ok');
    else myReject('Error');
  },1000);
}
);
function displayer(value){
document.querySelector('#display').innerHTML=value;
}
myPromise.then(
(value) => displayer(value)
,
(error) => displayer(error)
)

var promise2 = new Promise(
(resolve2,reject2) => {
setTimeout(function(){
  resolve2('watabottle');
},3000);
}
);
promise2.then(
function(value){
  document.querySelector('#display2').innerHTML=value;
}
)
