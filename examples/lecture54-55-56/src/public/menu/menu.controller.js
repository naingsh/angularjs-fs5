(function(){
    'use strict';
    angular.module('public')
    .controller('MenuController',['menuCategoriesData',
        function(menuCategoriesData){
            var $ctrl = this;
            $ctrl.menuCategoriesData = menuCategoriesData;
    }]);
})();