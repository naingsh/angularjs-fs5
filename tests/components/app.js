    angular.module('app',[]).controller('controller',controller);

    function controller(){
        this.hero = {
            name: 'Jack',
            gen: {
                genName: 'myth'
            }
        };
    }