describe('menucategories',function(){

    var $httpBackend;
    var menuCategoriesService;
    var apiBasePath;

    beforeEach(module('MenuCategoriesApp'));

    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
        menuCategoriesService = $injector.get('MenuCategoriesService');
        apiBasePath = $injector.get('ApiBasePath');
    }));
    
    it('should return expected data',function(){
        // console.log($httpBackend);
        $httpBackend.whenGET(apiBasePath+'/categories.json').respond(['Dummy','Lunch']);
        menuCategoriesService.getMenuCategories().then(function(response){
        expect(response.data).toEqual(['Dummy','Lunch']);
        });
        $httpBackend.flush();
    });
});