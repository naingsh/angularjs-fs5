(function () {
    'use strict';

    angular
        .module('NarrowItDownApp',[])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .constant('MenuItemsPath','https://davids-restaurant.herokuapp.com/menu_items.json')
        .directive('foundItem',foundItem);

    function foundItem(){
        return {
            templateUrl: 'foundMenuItems.html',
            scope:{
                foundItemArray: '<',
                onRemove: '&'
            }
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        var searchService = MenuSearchService;
        menu.getMatches = function(searchTerm){
            menu.found=[];
            if(searchTerm){
                menu.error='';
            var promise = searchService.getMatchedMenuItems(searchTerm);
                promise.then(function(response){
                    if(response.length!=0){
                        menu.found=response;
                    }else menu.error='Nothing Found';
                });
            }else{
                menu.error="Nothing Found";
            }
        };
        menu.remove = function(index){
            menu.found.splice(index,1);
        };
    }

    // service
    function MenuSearchService($http,MenuItemsPath){
        var service = this;
        service.getMatchedMenuItems = function(searchTerm){
            return $http.get(MenuItemsPath).then(
                function(response){
                    var foundItems = [];
                    var everyItems = response.data.menu_items;
                        for(var i=0;i<everyItems.length;i++){
                            var description = everyItems[i].description.toLowerCase();
                                if(description.indexOf(searchTerm.toLowerCase())!==-1){
                                    foundItems.push(everyItems[i]);
                                }
                        }
                    return foundItems;
                } );
        }
    }

}());