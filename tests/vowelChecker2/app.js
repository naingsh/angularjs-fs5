(function() {
  'use strict';
  angular.module('app',[])
  .controller('appCtrl',appCtrl)
  .provider('VowelChecker', VowelCheckerProvider);

  function appCtrl(VowelChecker){
    var display = this;
    var checker = VowelChecker;
    display.food='';
    display.msg="";
    display.check=function(event){
      if(event.keyCode==13){
        display.msg = checker.vowelCheck(display.food)+' '+display.food;
    }else if(event.keyCode==0){
      display.msg='';
    }
    }
  }

  function VowelCheckerService(vowels){
    var service = this;
    // var vowels = ['a','e','i','o','u'];
    service.vowelCheck = function(value){
      for(var i of vowels){
        if(i==value[0]){
          return 'an';
        }
      }
      return 'a';
    };
  }

  function VowelCheckerProvider(){
  var provider = this;
  provider.defaults = {
    vowels: ['a','e','i','o','u']
  }
  provider.$get = function(){
    return new VowelCheckerService(provider.defaults.vowels);
  }
  }

}());

var parent = {
  name: 'parent',
  value: 1,
  state: {
    offline: 1,
    online: 0
  }
};
console.log(parent);

  var child = Object.create(parent);
  console.log(child);
  // console.log('parent name: ',parent.name);
  // console.log('unnamed child name:',child.name);
  // child.name='child';
  // console.log('named child name:',child.name);
  // console.log('parent value:',parent.value);
  // console.log('unassigned child value:',child.value);
  // child.value=222;
  // console.log('assigned child value: ',child.value);
  child.state={offline:0,online:1};
  console.log(child.state);
  console.log(parent.state);
