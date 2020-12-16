(function(){
    'use strict';
    angular.module('common')
    .service("MenuService",MenuService);

    MenuService.$inject = ['$http','ApiPath'];
    function MenuService($http,ApiPath){
        var service = this;
        service.getMenuCategories = function(){
            return $http.get(ApiPath+'/categories.json').then(function(response){
                return response.data;
            });
        };
        service.getSingleCategory = function(shortName){
            return $http({
                method: "GET",
                url: ApiPath+'/menu_items.json',
                params: {
                    category: shortName
                }
            }).then(function(response){
                return response.data;
            });
        };
    }
})();