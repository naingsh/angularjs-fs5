(function(){

  var dummyText = "Fusce non placerat metus. Integer volutpat ante in lobortis luctus. Nam consequat arcu non vestibulum pretium. Suspendisse vestibulum velit et mi finibus bibendum. Fusce varius nisi et orci placerat consectetur. Vestibulum vitae turpis at enim convallis venenatis feugiat ut est. Etiam mollis bibendum imperdiet. Quisque mattis arcu finibus risus commodo eleifend. Aliquam maximus nibh risus, eget vestibulum est congue eget. Nam hendrerit posuere felis, nec aliquam quam fringilla eu. In eu urna ipsum. Pellentesque scelerisque tempus sem eget consequat.";

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
  .provider('RandomService', RandomServiceProvider);


  //controller for site's overall features
  function overseerController($scope,RandomService,$filter) {
    var oversee = this;
    var random = RandomService;
    oversee.date = new Date();
    oversee.shoppingList = random.getShoppingList();
    oversee.searchItem = '';
    oversee.getSearchItem = function(event){
      if(event.keyCode!=0){
      oversee.shoppingList = $filter('filter')
      (shoppingList,oversee.searchItem);
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
  // $scope.$watch(function(){console.log('loop fired!');});
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

wordFilter.$inject=['RandomService','$filter'];
  function wordFilter(RandomService,$filter){
    var caseA = this;
    var random = RandomService;
    caseA.paragraph1=dummyText;
    caseA.toUppercase = function(){
      caseA.paragraph1 =  $filter('uppercase')(caseA.paragraph1);
     }
     caseA.toLowercase = function(){
       caseA.paragraph1 = $filter('lowercase')(caseA.paragraph1);
     }
     caseA.toOriginalCase = function(){
       caseA.paragraph1 = dummyText;
     }
  }

  // provider
  function RandomServiceProvider(){
      var provider = this;
      provider.$get = function(){
        return new RandomService();
      }
  }

  //random service
  function RandomService() {
    var service = this;
    service.getShoppingList = function(){return shoppingList;};
    service.getDefaultJojo = function(){return jojos[0];};
    service.uppercase = function(string){
      var msg = $filter('uppercase')(string);
      return msg;
    };
  }
})();
