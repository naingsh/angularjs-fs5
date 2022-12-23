(function() {
  'use strict';
  angular.module('haatoApp',[])
  .controller('haatoCtrl',haatoCtrl)
  .service('getGifService',getGifService)
  // .constant('haatoUrl','https://nshtut.github.io/angular-fs5/tests/single-html/snippets/hatoPanik.html')
  // .constant('hololiveEveryone','https://nshtut.github.io/angular-fs5/tests/single-html/snippets/everyone.html')
//   .constant('urls',['https://nshtut.github.io/angular-fs5/tests/single-html/snippets/everyone.html'
//   ,'https://nshtut.github.io/angular-fs5/tests/single-html/snippets/hatoPanik.html']);
     .constant('urls',['./snippets/everyone.html','./snippets/hatoPanik.html']);
haatoCtrl.$inject = ['$timeout','getGifService','urls']
  function haatoCtrl($timeout,getGifService,urls){
    var feet = this;
    feet.url=urls[0]
    feet.change = function(){
      if(feet.url==urls[0]){
        feet.url=urls[1];
      }else{
        feet.url=urls[0];
      }
        feet.load();
    };
    feet.load = function(){
      $timeout( () => {
      var promise = getGifService.getGif(feet.url);
      promise.then(function(response){
        // console.log(response);
        feet.header=response.config.headers;
        feet.status=response.status;
        feet.data=response.data;
        document.querySelector('.container').innerHTML=response.data;
      }).catch(function(error){
        console.log(error);
      });
    },1000);
      document.querySelector('.container').innerHTML='Loading...';
  }
    feet.load();
}

  function getGifService($http){
    var service = this;
    service.getGif = function(url){
      return $http.get(url);
    };
  }

}());
