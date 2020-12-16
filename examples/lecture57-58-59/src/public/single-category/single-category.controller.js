(function(){
    'use strict';
    angular.module('public')
    .controller('SingleCategoryController',SingleCategoryController);

    SingleCategoryController.$inject = ['items'];
    function SingleCategoryController(items){
      var $ctrl = this;
      $ctrl.items = items;
    //   console.log($ctrl.items);
    }
})();