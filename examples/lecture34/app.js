(function () {
    'use strict';

    var app = angular.module('ShoppingList',[]);

    app.controller('ShoppingListController',ShoppingListController)
    .factory('ShoppingListFactory',ShoppingListFactory);

    app.component('listDisplay',{
        templateUrl: 'listDisplay.html',
        controller: ShoppingListComponentController,
        bindings: {
            items: '<',
            onRemove: '&',
            myTitle: '@title'
        }
    });

    app.service('WeightLossFilterService',WeightLossFilterService)
    .component('loadingSpinner',{
        templateUrl: 'spinner.html',
        controller: SpinnerController
    });

    function SpinnerController($rootScope){
        var $ctrl = this;
        var spinnerEventListener = $rootScope.$on('cookieChecking:processing',
        function(event,data){
            console.log('Event',event);
            console.log('Data',data);
            if(data.on===true){
                $ctrl.showSpinner=true;
            }else $ctrl.showSpinner=false;
        }) ;
        $ctrl.$onDestroy = function () {
            spinnerEventListener();
        };
    }

    ShoppingListComponentController.$inject = ['$rootScope','$q','$element','WeightLossFilterService'];
    function ShoppingListComponentController($rootScope,$q,$element,WeightLossFilterService){
        var $ctrl = this;
        var service = WeightLossFilterService;
        var totalItems;
        $ctrl.$onInit = function () {
            totalItems = 0;
        };
        $ctrl.$doCheck = function(){
            if(totalItems!==$ctrl.items.length){
                totalItems = $ctrl.items.length;

            $rootScope.$broadcast('cookieChecking:processing', {on:true}); 
            var promises=[];
        for(var i=0;i<$ctrl.items.length;i++){
            promises.push(service.checkName($ctrl.items[i].name));
        }

            $q.all(promises).then(function(result){
                $element.find('div.error').slideUp(900);
            }).catch(function(result){
                $element.find('div.error').slideDown(900);
            }).finally(function(){
        $rootScope.$broadcast('cookieChecking:processing',{on:false});
            });
            
        }
    };
        $ctrl.remove = function(myIndex){
            $ctrl.onRemove({index: myIndex});
        }
    }

    ShoppingListController.$inject = ['$element','ShoppingListFactory','WeightLossFilterService'];
    function ShoppingListController($element,ShoppingListFactory,WeightLossFilterService){
        var list = this;
        var shoppingList = ShoppingListFactory();
        list.itemName='';list.itemQty='';
        list.items = shoppingList.getItems();
         var originalTitle = 'Shopping List';
         list.title = originalTitle + ' ( '+list.items.length+' items )';
        list.add = function(){
            shoppingList.addItem(list.itemName,list.itemQty);
             list.title = originalTitle + ' ( '+list.items.length+' items )';
        };
        list.remove = function(index){
            list.lastRemoved= 'Last Removed Item was: '+list.items[index].name;
            shoppingList.removeItem(index);
            list.title = originalTitle + ' ( '+list.items.length+' items )';
        };
    }

    function ShoppingListService(maxItem){
        var service = this;
        var items = [];
        service.getItems = function(){
            return items;
        }
        service.addItem = function(name,quantity){
            var item = {
                name: name,
                quantity: quantity
            };
            if(maxItem===undefined || maxItem!==undefined && items.length<maxItem){
                items.push(item);
            }else throw new Error('Max Item Limit ('+maxItem+') reached!');
        }
        service.removeItem = function(index){
            items.splice(index,1);
        }
    }
    
    function ShoppingListFactory(){
        return function(maxItem){
            return new ShoppingListService(maxItem);
        }
    }

    WeightLossFilterService.$inject = ['$q','$timeout'];
    function WeightLossFilterService($q,$timeout){
        var service = this;
        service.checkName = function(name){
            var deferred = $q.defer();
            $timeout(function(){
                var result = {
                    message: ''
                }
                if(name.toLowerCase().indexOf('cookie')!==-1){
                    result.message = 'stay away from cookies!';
                    deferred.reject(result);
                }else{
                    deferred.resolve(result);
                }
            }, 3000);
            return deferred.promise;
        }
    }

}());