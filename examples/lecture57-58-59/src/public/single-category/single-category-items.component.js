(function(){
    'use strict';
    angular.module('public')
    .component('singleCategory',{
        templateUrl: 'src/public/single-category/single-category-items.html',
        bindings: {
            item: '<',
            category: '<'
        }
    });
})();