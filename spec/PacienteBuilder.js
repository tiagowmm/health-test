function PacienteBuilder() {

    var nome = "Guilherme";
    var idade = 28;
    var peso = 72;
    var altura = 1.80;

    var clazz = {
        comNome: function(valor){
            nome = valor;
            return this;
        },
        comIdade: function(valor){
            idade = valor;
            return this;
        },
        comPeso: function(valor){
            peso = valor;
            return this;
        },
        comAltura: function(valor){
            altura = valor;
            return this;
        },
        comNomeIdadePesoAltura: function(_nome, _idade, _peso, _altura){
            nome = _nome;
            idade = _idade;
            peso = _peso;
            altura = _altura;
            return this;
        },
        constroi: function () {
            return Paciente(nome, idade, peso, altura);
        }
    };

    return clazz;
}