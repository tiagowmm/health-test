describe("Números Romanos", function(){

    describe("Decimal", function(){

        it("deve converter decimal em romano", function(){
            var conversor = new Romanos();
            expect(conversor.converte(8)).toEqual("VIII");
        });

    });

    describe("Romano", function(){

        it("deve converter I em decimal", function(){
            var conversor = new Romanos();
            expect(conversor.romanoParaDecimal("I")).toEqual(1);
        });
    
        it("deve converter IV em decimal", function(){
            var conversor = new Romanos();
            expect(conversor.romanoParaDecimal("IV")).toEqual(4);
        });
    
        it("deve converter XVI em decimal", function(){
            var conversor = new Romanos();
            expect(conversor.romanoParaDecimal("XVI")).toEqual(16);
        });
        
    });

});