var person={
  name:"",
  type:"person"
};

// document.addEventListener('DOMContentLoaded',getkeypress);

angular.module("app1",[])
.controller("app1ctrl",getkeypress);

// function getkeypress($scope){
//   document.querySelector("#name").addEventListener("keyup",function(){
//     $scope.name=document.querySelector("#name").value;
//   });
// }
function getkeypress($scope){
document.querySelector("#name").addEventListener("keyup",keyUp);
}

function keyUp(){
  person.name=document.querySelector("#name").value;
  var num=loopName(person.name);
  msg(person.name,num);
}

function alpVal(name, index){
  //alphabet ascii value
  return name.charCodeAt(index);
}

function loopName(name){
  var totalLen=0;
  var i=0;
  for(i=0;i<name.length;i++){
    totalLen+=alpVal(name, i);
  }
  console.log("character count : "+i);
  // console.log(totalLen);
  return totalLen;
}

function msg(name, total){
var msg="Total numeric value of the name [";
document.querySelector("#output").innerText=msg+name+"] is "+total;
}
