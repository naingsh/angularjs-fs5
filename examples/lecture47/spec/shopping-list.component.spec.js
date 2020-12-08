describe('shoppinglist component',function(){
    var $componentController;

    beforeEach(module('ShoppingListDirectiveApp'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it('should not detect any cookie',function(){
        var bindings = {
            items: [{
                name: 'item 1',
                quantity: 1
            }]
        };
        var ctrl = $componentController('shoppingList',{$element:null},bindings);
        var cookieInList = ctrl.cookiesInList();
        expect(cookieInList).toEqual(false);
    });

    it('should be able to detect cookies',function(){
        var bindings = {
            items: [{
                name: 'kusa cookies',
                quantity: 1
            }   ]
        };
        var ctrl = $componentController('shoppingList',{$element:null},bindings);
        var cookieInList = ctrl.cookiesInList();
        expect(cookieInList).toEqual(true);
    });
});