(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('MainCategoriesController',MainCategoriesController);

    function MainCategoriesController(response){
        var mainCategories = this;
        mainCategories.list = response.data;
    }
})();