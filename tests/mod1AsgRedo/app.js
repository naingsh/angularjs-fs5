(function(){

  angular.module('LunchCheckerApp',[])
  .controller('LunchCheckerCtrl', lunchCheckerCtrl);

  function lunchCheckerCtrl(){
    var checker = this;
    checker.itemList='';
    checker.msg = '';
    checker.fontColor='';
    // checker.items = checker.input.filter();
    // checker.filterComma = function(){
    //
    // }
    checker.items=[];
    checker.check = function(){
      checker.fontColor='green';
      checker.items=checker.itemList.split(',');
      checker.new=checker.items.filter(emptyFilter);
      if(checker.new.length<=3 && checker.new.length>0){
        checker.msg = 'enjoy';
      }else if(checker.new.length==0){
        checker.msg = 'Fill data first';
        checker.fontColor='red';
      }else checker.msg='too much';
      console.log(checker.new);
    }
    function emptyFilter(value){
      // console.log('in');
      return value!=' ' && value!='';
    }
  }

})();
