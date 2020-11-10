(function() {
  'use strict';
    angular.module('app',[])
    .controller('controller',controller)
    .directive('myDir',myDir);

    // function myDir() {
    //   return {
    //     templateUrl: 'nameChange.html',
    //     scope:{
    //       name: '<',
    //       age: '<'
    //     },
    //     controller: nameChangeCtrl,
    //     controllerAs: 'change',
    //     bindToController: true
    //   };
    // }
    //
    // function nameChangeCtrl() {
    //   var change = this;
    //   change.change = function(){
    //     change.name='Naomi';
    //   }
    // }
    function myDir(){
        return {
          templateUrl: 'nameChange.html',
          scope:{
            // name: '<',
            // age:  '<',
            person: '='
         }
        // controller: newController,
        // controllerAs: 'person',
        // bindToController: true
        };
    }
    function newController() {
      var person = this;
      // person.changeName = function(){
      //   person.name='naomi';
      // }
    }

    function controller() {
      var person = this;
      person.naomi = {
        name: "Naomi",
        age: 19
      };
      person.borj = {
        name: "Borj",
        age: 25
      };
      person.changeName= function(name){
        person.borj.name='naomi';
        console.log('in');
      }
    }
}());
