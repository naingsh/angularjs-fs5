(function(){

  angular.module('ShoppingListServiceApp',[])
  .controller('ShoppingListController', shoppingListController)
  .service('ShoppingListService', ShoppingListService)
  .service('WeightLostFilterService',WeightLostFilterService);

  shoppingListController.$inject = ['ShoppingListService'];
  function shoppingListController(ShoppingListService){
    var list = this;
    var shoppingList = ShoppingListService;
    list.name = ""; list.quantity="";
    list.items = shoppingList.getItems();
    list.addItem = function(){
      try{
        // console.log(list.name);
      shoppingList.addItem(list.name,list.quantity);
    }catch (error){
      list.errorMsg = error.message;
    }
    };

  }

  function WeightLostFilterService($q,$timeout) {
    var service = this;
    service.checkName = function(name){
      var result = {
        message:''
      };
      var servicePromise = $q(
        function(serResolve,serReject){
          $timeout(
            function(){
              if(name.toLowerCase().indexOf('cookie')===-1) {
                serResolve(result);
              }
              else {
                result.message='stay away from cookies';
                serReject(result);
              }
            },3000);
          }
        );
      return servicePromise;
    }
    service.checkQuantity = function(quantity){
      var result={ message:'' };
      var deferred = $q.defer();
      $timeout(
        function(){
          if(quantity>2){
            result.message='too much';
            deferred.reject(result);
          }else deferred.resolve(result);
        },1000);
        // console.log(deferred);
        return deferred.promise;
    }
  }

  function ShoppingListService($q,WeightLostFilterService) {
    var service = this;
    var items = [];
    service.getItems = function(){
      return items;
    }
    // service.addItem = function(name,quantity){
    //   // console.log(WeightLostFilterService);
    //   var namePromise = WeightLostFilterService.checkName(name);
    //   namePromise.then(
    //     function(response){
    //       var quantityPromise = WeightLostFilterService.checkQuantity(quantity);
    //       quantityPromise.then(
    //         function(response){
    //           var item = {
    //             name: name,
    //             quantity: quantity
    //           };
    //           console.log(item);
    //           items.push(item);
    //         },function(error){
    //           console.log(error.message);
    //         }
    //       )
    //     }, function(error){
    //       console.log(error.message);
    //     }
    //
    //   )
    // }

    // prom.then().then().catch();
  //   service.addItem = function(name,quantity){
  //     var nameProm = WeightLostFilterService.checkName(name);
  //     nameProm.then(  function(response){  return WeightLostFilterService.checkQuantity(quantity);  }
  //   ).then( function(response){
  //       var item = {
  //       name: name,
  //       quantity: quantity
  //     };
  //     items.push(item);  }
  //   ).catch(  function(error) { console.log(error.message); }
  // )

  service.addItem = function(name,quantity){
    var nprom=WeightLostFilterService.checkName(name);
    var qprom=WeightLostFilterService.checkQuantity(quantity);
    $q.all([nprom,qprom]).then( (response)=>{
      var item={name: name,quantity:quantity };
      items.push(item);
    } ).catch(  (error)=>{ console.log(error.message); } );
  }
    service.removeItem = function(index){
      items.splice(index,1);
    }
  }
  }
)();
