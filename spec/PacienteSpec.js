describe("Paciente", function () {

    it("deve calcular o imc", function () {
        var maria = new Paciente("Maria", 28, 72, 1.80);
        expect(maria.imc()).toEqual(72 / (1.80 * 1.80));
    });

    it("deve calcular o imc 2", function(){
        var guilherme = new Paciente("Guilherme", 28, 82, 1.77);
        expect(guilherme.imc()).toEqual(82/(1.77 * 1.77));
    });

    it("deve calcular batimentos cardiacos", function(){
        var guilherme = new Paciente("Guilherme", 28, 82, 1.77);
        expect(guilherme.batimentos()).toEqual(28 * 365 * 60 * 80);
    });

});