(function(){

  angular.module('ControllerApp',[])
  .controller('parentController1', ParentController1)
  .controller('childController1', ChildController1)
  .controller('parentController2',ParentController2)
  .controller('childController2',ChildController2);

  ParentController1.$inject = ['$scope'];
  function ParentController1($scope) {
  var scp = $scope;
  scp.parentValue = 1;
  scp.pc = this;  //pc = parent controller
  scp.pc.parentValue = 1;
  }


  ChildController1.$inject = ['$scope'];
  function ChildController1($scope) {
    var scp = $scope;
    // console.log('$scope.parentValue: ',scp.parentValue);
    // console.log('Child $scope',scp);
    // console.log(scp.$parent);

    // scp.parentValue = 5;
    // console.log('$scope.parentValue:',scp.parentValue);
    // console.log('child $scope',scp);

    // console.log(scp);
    // console.log(scp.pc.parentValue);
    // scp.pc.parentValue = 5;
    // console.log(scp.pc.parentValue);
    // console.log(scp.$parent.parentValue);

// console.log(scp.pc.parentValue);
// console.log('$scope: ',scp);
//     scp.pc = {
//       parentValue:42069
//     };
//     console.log(scp.pc.parentValue);
//     console.log("$scope: ",scp);


  }
})();

  function ParentController2(){
  var parent = this;
  parent.value = 1;
  }

  ChildController2.$inject = ['$scope'];
  function ChildController2($scope){
    var child = this;
    child.value = 5;
    console.log($scope);
  }
