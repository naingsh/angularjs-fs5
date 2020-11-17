(function(){
    'use strict';
    angular.module('ShoppingListApp',[])
    .controller('ShoppingListController',ShoppingListController)
    .factory('ShoppingListFactory',ShoppingListFactory)
    .directive('shoppingList',ShoppingListDir);

    function ShoppingListDir(){
        return {
            templateUrl: 'shoppingList.html',
            scope: {
                items: '<',
                myTitle: '@',
                onRemove: '&'
            },
            controller: ShoppingListDirController,
            controllerAs: 'list',
            bindToController: true,
            link: ShoppingListDirLink
        }
    }
    
    function ShoppingListDirLink(scope,element,attrs,controller){
        console.log(element);
      scope.$watch('list.cookieInList()',function (newValue,oldValue){
            console.log('old value:',oldValue);
            console.log('new Value:',newValue);

            if(newValue===true){
                displayCookieWarning();
            }else {
                removeCookieWarning();
            }
        });

        function displayCookieWarning(){
            //using angular jqlite
            // var warningElem = element.find('div');
            // console.log(warningElem);
            // warningElem.css('display','block');

            //jquery
            var warning = element.find('div.error');
            warning.slideDown(900);

        }
        function removeCookieWarning(){
            // using angular jqlite
            // var warningElem = element.find('div');
            // warningElem.css('display','none');

            //jquery
            var warning = element.find('div.error');
            warning.slideUp(900);
        }
    }

    function ShoppingListDirController(){
        var list = this;
        list.cookieInList = function(){
            for(var i=0;i<list.items.length;i++){
                var name = list.items[i].name;
                if(name.toLowerCase().indexOf('cookie')!==-1){
                    return true;
                }
            }
            return false;
        }
    }

    ShoppingListController.$inject = ['ShoppingListFactory'];
    function ShoppingListController(ShoppingListFactory){
        var list = this;
        var service = ShoppingListFactory(5);

        list.items=service.getItems();

        var orgTitle = "Shopping List ( ";
        list.title = orgTitle+list.items.length+" items left)";
        
        list.itemName=''; list.itemQuantity='';

        list.addItem = function(){
        service.addItem(list.itemName,list.itemQuantity);
        list.title = orgTitle+list.items.length+" items left)";
        };

        list.removeItem = function(index){
            service.removeItem(index);
        list.title = orgTitle+list.items.length+" items left)";
        }
    }

    function ShoppingListService(maxItem){
        var service = this;
        var items=[];
        service.getItems = function(){
            return items;
        }
        service.addItem = function(name,quantity){
            var item = {
                name: name,
                quantity: quantity
            };
            items.push(item);
        };
        service.removeItem = function(index){
            items.splice(index,1);
        }
    }

    function ShoppingListFactory(){
        return function(maxItem){
            return new ShoppingListService(maxItem);
        }
    }

})();