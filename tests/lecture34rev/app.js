(function () {
    'use strict';

    angular.module('ShoppingListApp',[])
    .controller('ShoppingListCtrl',ShoppingListController)
    .factory('ShoppingListFactory',ShoppingListFactory)
    .service('WeightLossFilterService',WeightLossFilterService)
    .component('shoppingList',{
        templateUrl: 'shoppingList.html',
        bindings: {
            items: '<',
            title: '@',
            onRemove: '&'
        },
        controller: ShoppingListComponentController
    })
    .component('loading',{
        templateUrl: 'loading.html',
        controller: LoadingSpinnerController
    });

    function LoadingSpinnerController($rootScope){
        var $ctrl = this;
        var spinnerEventListener = $rootScope.$on('cookieCheck',
            function(event,data){
                    if(data.on===true){
                        $ctrl.showSpinner=true;
                    }else $ctrl.showSpinner=false;
            });
        $ctrl.$onDestroy = function () {
            spinnerEventListener();
        };
    }

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

    function ShoppingListController(ShoppingListFactory,WeightLossFilterService){
        var list = this;
        var shoppingList = ShoppingListFactory();
        var filter = WeightLossFilterService;
        list.itemName = '';list.itemQty='';
        list.items = shoppingList.getItems();
        var originalTitle = 'Shopping List ';
        var titleUpdate = function(){
            list.title = originalTitle+'('+list.items.length+') items';
        };
        titleUpdate();
        list.addBtn = function(){
            shoppingList.addItem(list.itemName,list.itemQty);
            titleUpdate();
        };
        list.removeBtn = function(index){
            shoppingList.removeItem(index);
            titleUpdate();
        }
    }
    
    function ShoppingListService(){
        var service = this;
        var items = [];
        service.addItem = function(name, qty){
            var item = {
                name: name,
                quantity: qty
            };
            items.push(item);
        }
        service.getItems = function(){
            return items;
        }
        service.removeItem = function(index){
            items.splice(index,1);
        }
    }

    function ShoppingListFactory(){
        return function(){
            return new ShoppingListService();
        };
    }

    function WeightLossFilterService($q,$timeout){
        var service = this;
        service.checkName = function(name){
            var deferred = $q.defer();
            $timeout(function(){
                var result = {
                    message:''
                };
                if(name.toLowerCase().indexOf('cookie')===-1){
                    deferred.resolve(result);
                }else deferred.reject(result);
            }, 3000);
            return deferred.promise;
        }
    }
}());