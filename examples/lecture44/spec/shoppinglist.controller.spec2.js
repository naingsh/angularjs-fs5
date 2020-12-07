xdescribe('MockTest2 This is mock test 2 bro wtf',function(){
    
    beforeEach(function(){
        module(function($provide){
            $provide.service('ShoppingListMockService',function(){
                var service = this;
                service.addItem = function(name,quantity){
                    throw new Error('Test Message.');
                };
                service.getItems = function(){
                    return null;
                };
            });
        });
        module('ShoppingListApp');
    });
    var mockController;
    var $controller;
    beforeEach(inject(function(_$controller_,ShoppingListMockService){
         $controller = _$controller_;
         mockController = $controller('ShoppingListController',
        {ShoppingListService:ShoppingListMockService});
    })
    );
    
    it('should change error msg in controller',function(){
        mockController.addItem();
        expect(mockController.errorMessage).toBe('Test Message.');
    });

}); 