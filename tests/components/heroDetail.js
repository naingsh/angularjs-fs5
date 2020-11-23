angular.module('app')
.component('heroComponent',{
    templateUrl: 'heroDetail.html',
    bindings: {
        hero: '<'
    },
    controller:heroComponentCtrl
});

function heroComponentCtrl(){
    var ctrl = this;

    ctrl.nameChanger = function(){
        ctrl.hero.name='Not Jack';
    };
    ctrl.logObjects = function(){
        var hero = ctrl.hero;
        var newHero = Object.create(hero);
        console.log('original object: ',hero);
        console.log('newly created object: ',newHero);
        newHero.gen={
            genName: 'fantasy'
        }
        console.log('original object: ',hero);
        console.log('newly created object: ',newHero);
    };
    
}