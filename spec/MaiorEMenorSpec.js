describe("Maior e Menor", function(){

	var algoritmo;

	beforeEach(function(){
		algoritmo = new MaiorEMenor();
	});

	it("deve entender numeros em ordem nao sequencial", function(){
		algoritmo.encontra([5,15,7,9]);
		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
		
	});

	it("deve entender numeros em ordem crescente", function(){
		algoritmo.encontra([5,6,7,8]);
		expect(algoritmo.pegaMaior()).toEqual(8);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("deve entender numeros em ordem decrescente", function(){
		algoritmo.encontra([9,8,7,6,5]);
		expect(algoritmo.pegaMaior()).toEqual(9);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("deve entender array com um elemento", function(){
		algoritmo.encontra([5]);
		expect(algoritmo.pegaMaior()).toEqual(5);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

});