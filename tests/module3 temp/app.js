(function(){
    'use strict';
    var app = angular.module('NarrowItDownApp',[]);
    app.controller("NarrowItDownController",NarrowItDownController);
    app.constant('MenuItemsPath','https://davids-restaurant.herokuapp.com/menu_items.json')
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',FoundItems);

    function FoundItems(){
        return {
            templateUrl: 'foundMenuItems.html',
            scope: {
                foundItemsArray: '<',
                onRemove: '&'
            },
            transclude: true
        }
    }

    NarrowItDownController.$inject = ['$scope','MenuSearchService'];
    function NarrowItDownController($scope,MenuSearchService){
        var list = this;
        var service = MenuSearchService;
        list.getList = function(searchTerm){
            var promise =service.getMatchedMenuItems(searchTerm);
           promise.then(
                function(response){
                    list.found = [];
                    list.errorMsg='';
                    var array = response.data.menu_items;
                    var element = document.querySelector('#template');
        $scope.$watch(list.found,function(newValue,oldValue){
                console.log('newvaleu',newValue);
                console.log('oldValue',oldValue);
            if(newValue!=0){
                removeErrorMsg();
            }else displayNthFound();
        });
        function displayNthFound(){
            var warning = $(element).find('div.error');
            warning.slideDown(900);
        }
        function removeErrorMsg(){
            var warning = $(element).find('div.error');
            warning.slideUp(900);
        }
                    if(searchTerm){
                    for(var i=0;i<array.length;i++){
                        if(array[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1){
                            list.found.push(array[i]);
                        }
                    }
                    if(list.found.length!=0){
                   return list.found;
                    }
                }
                }
            );
        };
        list.remove = function(index){
            list.found.splice(index,1);
        }
        list.errorMsg = 'Nothing Found!';
    }

    MenuSearchService.$inject = ['$http','MenuItemsPath'];
    function MenuSearchService($http,MenuItemsPath){
        var service = this;
        service.getMatchedMenuItems = function(){
           return $http.get(MenuItemsPath);
        };
    }

})();