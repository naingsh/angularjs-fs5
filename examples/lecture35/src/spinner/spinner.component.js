(function () {
    'use strict';

    angular.module('Spinner')
    .component('loading',{
        templateUrl: 'src/spinner/spinner.template.html',
        controller: LoadingSpinnerController
    });

    LoadingSpinnerController.$inject = ['$rootScope'];
    function LoadingSpinnerController($rootScope){
        var $ctrl = this;
        var spinnerEventListener = $rootScope.$on('cookieCheck',
            function(event,data){
                console.log('event',event);
                console.log('data',data);
                    if(data.on===true){
                        $ctrl.showSpinner=true;
                    }else $ctrl.showSpinner=false;
            });
        $ctrl.$onDestroy = function () {
            spinnerEventListener();
        };
    }

}());