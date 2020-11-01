(function(){
  angular.module('CheckOffApp',[])
  .controller('CheckOffCtrl',checkOff);

  var shoppingList = [
    {name:'cookies',quantity:10},
    {name:'apples',quantity:12},
    {name:'chcocolate bars',quantity:14},
    {name:'ramen packs',quantity:69},
    {name:'bananas',quantity:5}
];
  function checkOff(){
    var checkoff = this;
    checkoff.itemsA = shoppingList;
    checkoff.itemsB = [];
    // checkoff.temp={};
    checkoff.btn = function(index){
    var temp=checkoff.itemsA.splice(index,1);
    checkoff.itemsB.splice(1,0,temp[0]);
    }
  }
})();
