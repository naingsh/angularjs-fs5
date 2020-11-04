(function() {
  'use strict';

    angular.module('app',[])
    .controller('controller',ctrl);

    function ctrl(){
      var btn = this;
      btn.state = 'off';
      btn.bgC = '';
    btn.change =  function(){
        if(btn.state=='on') {
          btn.state='off';
          btn.bgC = '';
        }
        else {
          btn.state='on';
          btn.bgC = 'cyan';
      }
    }
    }
}());
