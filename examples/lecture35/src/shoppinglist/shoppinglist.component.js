(function () {
    'use strict';

    angular.module('ShoppingListApp')
    .component('shoppingList',{
        templateUrl: 'src/shoppinglist/shoppinglist.template.html',
        bindings: {
            items: '<',
            title: '@',
            onRemove: '&'
        },
        controller: ShoppingListComponentController
    });

    ShoppingListComponentController.$inject = ['$rootScope','$element','$q','WeightLossFilterService'];
    function ShoppingListComponentController($rootScope,$element,$q,WeightLossFilterService){
        var $ctrl = this;
        var totalItems;
        var filter = WeightLossFilterService;
        $ctrl.$onInit = function () {
            totalItems = 0;
        };
        $ctrl.$doCheck = function(){
            var promises=[];
            if(totalItems!=$ctrl.items.length){
                totalItems = $ctrl.items.length;
            $rootScope.$broadcast('cookieCheck',{on:true});
            for(var i=0;i<$ctrl.items.length;i++){
                var namePromise = filter.checkName($ctrl.items[i].name);
                promises.push(namePromise);
            }
            $q.all(promises).then(function(){
                $element.find('div.error').slideUp(900);
            }).catch(function(){
                $element.find('div.error').slideDown(900);
            }).finally(function(){
                $rootScope.$broadcast('cookieCheck',{on:false});
            });
        }
        };
        $ctrl.remove = function(myIndex){
            $ctrl.onRemove({index : myIndex});
        }
    }

}());