(function(){

angular.module('myFirstApp', [])
.controller('myFirstController', function($scope){
$scope.a=1;
$scope.b=2;
}
)
.controller('secondController',
['$scope', function($scope){
$scope.name=['jonathan','joseph','jotaro','josuke','giogio','jolynn','johnny'];
}]
)
.controller('ctrl3',
function($scope){
	$scope.bass="ZA WARUDO!!";
}
);
})();
