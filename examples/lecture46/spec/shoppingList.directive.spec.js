describe('shoppinglist directive',function(){
    var $compile;
    var $rootScope;

    var expectedHTML = '<h3 class="ng-binding">Test Title</h3>\
    <ol>\
      <!-- ngRepeat: item in list.items --><li ng-repeat="item in list.items" class="ng-binding ng-scope">\
        1 of item 1\
        <button ng-click="list.removeItem($index);">Remove Item</button>\
      </li><!-- end ngRepeat: item in list.items --><li ng-repeat="item in list.items" class="ng-binding ng-scope">\
        2 of item 2\
        <button ng-click="list.removeItem($index);">Remove Item</button>\
      </li><!-- end ngRepeat: item in list.items -->\
    </ol>'.replace(/\s/g,'');

    
    beforeEach(module('ShoppingListDirectiveApp'));

    beforeEach(inject(function(_$rootScope_,_$compile_){
        $rootScope=_$rootScope_;
        $compile=_$compile_;
    }));

    beforeEach(inject(function($templateCache){
        var directiveTemplate = null;
        var req = new XMLHttpRequest();
        req.onload = function(){
            console.log(this);
            directiveTemplate = this.responseText;
        }
        
        req.open('get','shoppingList.html',false);
        req.send();
        $templateCache.put('shoppingList.html',directiveTemplate);
    
    }));

        it('replaces the element with appropriate content',function(){
            var list = {};
            list.items = [
                {name: 'item 1',quantity:1},
                {name: 'item 2',quantity:2}
            ];
            $rootScope.list = list;

            var html = '<shopping-list my-list="list" title="Test Title"></shopping-list>';
            var element = $compile(html)($rootScope);
            
            $rootScope.$digest();

            expect(element.html().replace(/\s/g,'')).toContain(expectedHTML);
        });


});