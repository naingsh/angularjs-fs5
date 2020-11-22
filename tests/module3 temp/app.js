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
                onRemove: '&',
                errorMsg: '<'
            }
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var list = this;
        var service = MenuSearchService;
        list.serachTerm='';
        list.getList = function(searchTerm){
            var promise =service.getMatchedMenuItems(searchTerm);
           promise.then(
                function(response){
                    console.log(response);
                    list.found = [];
                    list.errorMsg='';
                    console.log(list.found);
                    var array = response.data.menu_items;
                    console.log(searchTerm);
                    if(searchTerm!=undefined && searchTerm!=''){
                    for(var i=0;i<array.length;i++){
                        if(array[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1){
                            list.found.push(array[i]);
                        }
                    }
                    if(list.found.length!=0){
                   return list.found;
                    }else {
                        list.errorMsg='Nothing Found';
                    return list.errorMsg;
                    }
                }else {
                    list.errorMsg='Nothing Found';
                    return list.errorMsg;
             }
                }
            );
        };
        list.remove = function(index){
            list.found.splice(index,1);
        }
    }

    MenuSearchService.$inject = ['$http','MenuItemsPath'];
    function MenuSearchService($http,MenuItemsPath){
        var service = this;
        service.getMatchedMenuItems = function(){
           return $http.get(MenuItemsPath);
        };
    }

})();