(function() {
  'use strict';
  angular.module('haatoApp',[])
  .controller('haatoCtrl',haatoCtrl)
  .service('getGifService',getGifService)
  .constant('haatoUrl','https://nshtut.github.io/angular-fs5/tests/single-html/media/hatoPanik.gif');

  //https://github.com/nshtut/angular-fs5/blob/main/tests/single-html/media/hatoPanik.gif

haatoCtrl.$inject = ['getGifService']
  function haatoCtrl(getGifService){
    var feet = this;
    var promise = getGifService.getHaato();
    promise.then(function(response){
      feet.panik = response.data;
      console.log(response);
    }).catch(function(error){
      console.log(error);
    });
  }

  function getGifService($http,haatoUrl){
    var service = this;
    service.getHaato = function(){
      return $http({
        method: 'GET',
        url: haatoUrl
      });
    };
  }

}());
