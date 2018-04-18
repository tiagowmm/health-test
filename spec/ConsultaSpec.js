describe("Consulta", function(){

    var paciente;

    beforeEach(function(){
        // console.log("beforeEach");
        // paciente = new Paciente("Guilherme", 28, 72, 1.80);
        // paciente = new PacienteBuilder().constroi();
        paciente = new PacienteBuilder().comNome("Tiago").constroi();
    });

    describe("Consultas do tipo retorno", function(){

        it("nao deve cobrar nada se for um retorno", function(){
            console.log(paciente);
            var consulta = new Consulta(paciente, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });

    });

    describe("Consultas com procedimentos", function(){

        it("deve cobrar 25 por cada procedimento comum", function(){
            var consulta = new Consulta(paciente, ["proc1", "proc2", "proc3"], false, false);
            expect(consulta.preco()).toEqual(75);
        });
    
        it("deve cobrar preco especifico dependendo do procedimento", function(){
            var consulta = new Consulta(paciente, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
 
    });

    describe("Consulta Particular", function(){
        
        it("deve calcular com procedimentos comuns", function(){
            var consulta = new Consulta(paciente, ["proc1", "proc2", "proc3"], true, false);
            expect(consulta.preco()).toEqual(75 * 2);
        });

        it("deve calcular com procedimentos epecificos", function(){
            var consulta = new Consulta(paciente, ["proc1", "raio-x", "proc2", "gesso"], true, false);
            expect(consulta.preco()).toEqual( (25 + 55 + 25 + 32) * 2);
        });

    });

    describe("Consultas por um convênio", function() {
        it("deve cobrar preco especifico dependendo do procedimento", function() {
            var consulta = new Consulta(paciente, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

});