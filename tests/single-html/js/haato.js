(function() {
  'use strict';
  angular.module('haatoApp',[])
  .controller('haatoCtrl',haatoCtrl)
  .service('getGifService',getGifService)
  .constant('haatoUrl','https://nshtut.github.io/angular-fs5/tests/single-html/snippets/hatoPanik.html')
  .constant('hololiveEveryone',)
  //https://github.com/nshtut/angular-fs5/blob/main/tests/single-html/media/hatoPanik.gif

haatoCtrl.$inject = ['getGifService']
  function haatoCtrl(getGifService){
    var feet = this;
    var promise = getGifService.getHaato();
    promise.then(function(response){
      console.log(response);
      document.querySelector('.container').innerHTML+= response.data;
    }).catch(function(error){
      console.log(error);
    });
    document.querySelector('.container').innerHTML+='loading';
  }

  function getGifService($http,haatoUrl,hololiveEveryone){
    var service = this;
    service.getHaato = function(){
      return $http.get(haatoUrl);
    };
  }

}());
