describe('isMultipleOf5?',function(){
    var num1,num2,num3;
    beforeEach(function(){
        num1 = 45;
        num2 = 23;
        num3 = 5;
    });
        it('expected to be true, number 45',function(){
            var result = isMultipleOf5(num1);
            expect(result).toBe(true);
        });
        it('expected to be false, 23',function(){
            var result = isMultipleOf5(num2);
            expect(result).not.toBe(true);
        });
        it('expected to be true,5',function(){
            var result = isMultipleOf5(num3);
            expect(result).toBe(true);
        });
});