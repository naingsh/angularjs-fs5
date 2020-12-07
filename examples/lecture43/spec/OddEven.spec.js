describe('OddEvenGenerator',function(){
    var randomNumGenerator4;
    var randomNumGenerator7;
    beforeEach(function(){
        randomNumGenerator4 = function(from,to){
            return 4;
        };
        randomNumGenerator7 = function(from,to){
            return 7;
        };
    });
    it('should produce odd number',function(){
     var result = getRandomOddOrEven1to10('odd',randomNumGenerator7);
     expect(result).toEqual(7);
    });
    it('should produce even number',function(){
    var result = getRandomOddOrEven1to10('even',randomNumGenerator4);
    expect(result).toEqual(4);
    });
});