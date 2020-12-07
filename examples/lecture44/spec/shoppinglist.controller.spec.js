describe('ShoppingListController',function(){
    beforeEach(module('ShoppingListApp'));
    var $ctrl;
    var shoppingListController;

    beforeEach(inject(function(_$controller_){
        $ctrl = _$controller_;
        var shoppingListServiceErrorMock = {};
        shoppingListServiceErrorMock.addItem = function(name,qty){
            throw new Error('Test Message.');
        }
        shoppingListServiceErrorMock.getItems = function(){
            return null;
        }
        shoppingListController = $ctrl('ShoppingListController',
        {ShoppingListService:shoppingListServiceErrorMock});

    }));

    it('should change error msg in controller',function(){
        shoppingListController.addItem();
        expect(shoppingListController.errorMessage).toBe('Test Message.');
    });
});
