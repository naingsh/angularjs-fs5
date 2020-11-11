(function() {
  'use strict';
    angular.module('app',[])
    .controller('controller',controller)
    .directive('myDir',myDir)
    .controller('stopWatch',stopWatch)
    .directive('myWatch',myWatch)
    .constant('everyoneUrl',
    'getGifUrl.html')
    .directive('myHato',myHato);

    function myHato(){
      return {
        template: '<img src="../single-html/media/hatoPanik.gif">'
      }
    }

    function myWatch(){
      return{
        templateUrl: 'watch.html',
        scope:{
          start: '<',
          seconds: '<',
          stop: '<attr',
          reset: '<resetter'
        },
        controller: gifInsert,
        controllerAs: 'gif',
        bindToController: false
      }
    }

    function gifInsert($http,everyoneUrl) {
      var promise = this;
      promise.getGif = function(){
      var gif = get(everyoneUrl);
      function get(url){
        return $http.get(url);
      }
        gif.then(
          function(response){
            document.querySelector('.gif').innerHTML= response.data;
          }
        ).catch(function(error){
          console.log(error);
        });
      }
    }

    function stopWatch($interval){
      var watch = this;
      watch.seconds=0
      watch.counter = function(){
        watch.seconds++;
      };
      var startCount;
    watch.start = function(){
  startCount =  $interval(watch.counter,100);
  }
  watch.reset = function(){
    watch.seconds=0;
    $interval.cancel(startCount);
  }
      watch.stop = function(){
        $interval.cancel(startCount);
      }
    }

    function myDir(){
        return {
          templateUrl: 'nameChange.html',
          scope:{
            person: '='
         }
        };
    }
    function newController() {
      var person = this;
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
