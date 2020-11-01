(function(){

  var dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper pulvinar eros ac efficitur. Proin molestie, risus in mollis mollis, felis risus laoreet elit, nec blandit lorem ligula nec augue. Integer sit amet eleifend ligula. Aliquam a mattis urna. Integer mattis imperdiet dolor eu condimentum. Donec odio erat, blandit sed aliquet ut, laoreet id orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed eros id leo pellentesque elementum. Praesent egestas neque at odio condimentum, quis interdum mi vehicula. Praesent felis mi, iaculis ac dignissim a, semper et orci. Donec porttitor diam eu diam dictum condimentum. Suspendisse non libero eleifend, vehicula ante eu, pulvinar ex. Aliquam eleifend vulputate tempus. Pellentesque eu sagittis neque.';
  var shoppingList = ["Milk", "Donuts", "Cookies",
"Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)",
"Pepto Bismol (Cookie flavor)"];

  var jojos = [
    {
      num:1,
      name: 'Jonathan Joestar',
      ability: 'Hamon',
      part: 'Phantom Blood'
    },
    {
      num:2,
      name: 'Joseph Joestar',
      ability: 'Hamon & Hermit Purple',
      part: 'Battle Tendency'
    },
    {
      num:3,
      name: 'Jotaro Kujo',
      ability: 'Star Platinum',
      part: 'Stardust Crusaders'
    },
    {
      num:4,
      name: 'Josuke Higashikata(4)',
      ability: 'Crazy Diamond',
      part: 'Diamond is Unbreakable'
    },
    {
      num:5,
      name: 'Giorno Giovana',
      ability: 'Gold Experience',
      part: 'Vento Aureo (Golden Wind)'
    },
    {
      num:6,
      name: 'Jolyne Cujoh',
      ability: 'Stone Free',
      part: 'Stone Ocean'
    },
    {
      num:7,
      name: 'Johnny Joestar',
      ability: 'Spin/Tusk',
      part: 'Steel Ball Run'
    },
    {
      num:8,
      name: 'Josuke Higashikata(8)',
      ability: 'Soft & Wet',
      part: 'JoJolion'
    }
  ];

  var app=angular.module('mod2app',[]);
  app.controller('WordFilter', wordFilter)
  .controller('Overseer', overseerController)
  .controller('ShoppingList', shoppingListCtrl)
  .controller('AddList',addListCtrl)
  .provider('RandomService', RandomServiceProvider)
  .config(Config);

  Config.$inject = ['RandomServiceProvider'];
  function Config(RandomServiceProvider){
    RandomServiceProvider.defaults.maxItem=2;
  }

  var injectServices = ['$scope','RandomService','$filter'];
  //controller for site's overall features
  overseerController.$inject=injectServices;
  function overseerController($scope,RandomService,$filter) {
    var oversee = this;
    var random = RandomService;
    $scope.showWatchers = function(){
      // console.log($scope);
      console.log($scope.$$watchers);
      console.log('Watchers Count: ',$scope.$$watchersCount);
    }
    oversee.date = new Date();
  oversee.searchJojo = '';
  // oversee.list = random.getJojoList();
  oversee.showJojo=random.getDefaultJojo();
  oversee.mainJojo = function(event){
    if(event.keyCode!=0){
      for(var i=0;i<jojos.length;i++){
      if(jojos[i].name.toLowerCase().indexOf(oversee.searchJojo.toLowerCase())!=-1){
        oversee.showJojo = jojos[i];
        break;
      }
    }
  }
  }
  }

  function addListCtrl($scope,$filter,RandomService) {
    var oversee=this;
    var random = RandomService;
    oversee.removeThisItem = function(index){
      oversee.itemList.splice(index,1);
      console.log(index);
      if(oversee.itemList.length!=random.maxItem){
        oversee.errorMsg = undefined;
      }
    }
    oversee.itemList=random.getItems();
    oversee.newItemName="";
    oversee.newItemQuantity='';
    oversee.addNewItem = function(){
      try{
      random.addItems(oversee.newItemName,oversee.newItemQuantity);
    }catch(error){
      oversee.errorMsg = error.message;
    }
    };
    oversee.removeLastItem = function(){
      random.removeItems();
      oversee.errorMsg = null;
    };
    var scope = $scope;
    oversee.showWatchers = function () {
      // console.log(scope);
      // for(var i=0;i<scope.$$watchersCount;i++){
      //   console.log(scope.$$watchers[i]);
      // }
      console.log(scope.$$watchers);
      console.log('watchers count:', scope.$$watchersCount);
    }
  }

// shoppingListCtrl.$inject = injectServices;
function shoppingListCtrl($rootScope,$scope,RandomService,$filter) {
  var list = this;
  var random = RandomService;
  var scope = $scope;
  // scope.$watch(function(){console.log('watching...');})
  list.shoppingList = random.getShoppingList();
  list.searchItem = '';
  list.getSearchItem = function(event){
    if(event.keyCode!=0){
    list.shoppingList = $filter('filter')
    (shoppingList,list.searchItem);
  }
  // function check(value) {
  //   return value.indexOf(oversee.searchItem) != -1;
  // }
  // var temp = [];
  // for(var i=0;i<shoppingList.length;i++){
  //   temp.push(shoppingList[i].toLowerCase());
  // }
  // oversee.shoppingList = temp.filter(check);
};

  list.showWatchers = function(){
    console.log(scope.$$watchers);
  }
}
wordFilter.$inject=['$scope','$filter'];
  function wordFilter($scope,$filter){
    var caseA = this;
    var scope = $scope;
    caseA.pState='';
    // var random = RandomService;
    caseA.paragraph1=dummyText;
    caseA.toUppercase = function(){
      caseA.paragraph1 =  $filter('uppercase')(caseA.paragraph1);
      caseA.pState = 0;
    };
     caseA.toLowercase = function(){
       caseA.paragraph1 = $filter('lowercase')(caseA.paragraph1);
       caseA.pState = 1;
     };
     caseA.toOriginalCase = function(){
       caseA.paragraph1 = dummyText;
       caseA.pState='';
     };
     caseA.int=0;
     caseA.add = function(){
       caseA.int++;
     }

     caseA.showWatchers = function () {
       // console.log(scope);
       console.log(scope.$$watchers);
       console.log('watchers count:', scope.$$watchersCount);
     }
  }

  // provider
  function RandomServiceProvider(){
      var provider = this;
      provider.defaults = {
        maxItem:5
      }
      provider.$get = function(){
        return new RandomService(provider.defaults.maxItem);
      }
  }

  //random service
  function RandomService(maxItem) {
    var service = this;
    service.getShoppingList = function(){return shoppingList;};
    service.getDefaultJojo = function(){return jojos[0];};
    service.uppercase = function(string){
      var msg = $filter('uppercase')(string);
      return msg;
    };
    var items = [];
    service.addItems = function(itemName,itemQuantity){
      if(maxItem===undefined || maxItem!==undefined && items.length<maxItem){
      var newItem = {
        name:itemName,
        quantity:itemQuantity
      }
      items.push(newItem);
    }else {
      throw new Error('Max Item List ('+maxItem+') Reached!');
    }
    };
    service.getItems = function(){
      return items;
    };
    service.removeItems = function(){
      items.pop();
    }
  }

})();
