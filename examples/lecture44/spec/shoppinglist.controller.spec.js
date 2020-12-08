describe('ShoppingListController',function(){
    beforeEach(module('ShoppingListApp'));
    var $ctrl;
    var shoppingListController;

    beforeEach(inject(function(_$controller_){
        $ctrl = _$controller_;
        var shoppingListServiceErrorMock = {};
        shoppingListServiceErrorMock.addItem = function(name,qty){
            throw new Error('Test Message.');
        };
        shoppingListServiceErrorMock.getItems = function(){
            return null;
        };
        var dummyFunction = function(){
            return 'this is dummy function';
        }
        shoppingListController = $ctrl('ShoppingListController',
        {ShoppingListService:shoppingListServiceErrorMock,dumFunc:dummyFunction});

    }));

    it('should change error msg in controller',function(){
        shoppingListController.addItem();
        expect(shoppingListController.errorMessage).toBe('Test Message.');
    });
    it('should return dummy function result',function(){
        var result = shoppingListController.dummyFunction();
        expect(result).toEqual('this is dummy function');
    })
});
