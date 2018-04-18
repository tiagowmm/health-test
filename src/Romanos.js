function Romanos() {

    var numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var letras = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    function numerosParaLetras(numero) {
        switch (numero) {
            case 1: return "I";
            case 4: return "IV";
            case 5: return "V";
            case 9: return "IX";
            case 10: return "X";
            case 40: return "XL";
            case 50: return "L";
            case 90: return "XC";
            case 100: return "C";
            case 400: return "CD";
            case 500: return "D";
            case 900: return "CM";
            case 1000: return "M";
            default: return -1;
        }
    }

    function traduzirNumeral(caractere){
        return Math.floor(Math.pow(10, "IXCM".indexOf(caractere))) + 5 * Math.floor(Math.pow(10, "VLD".indexOf(caractere)));
    }

    var clazz = {
        converte: function (valor) {
            if (valor <= 0 || valor >= 4000) return valor;
            var numeroRomano = "";
            for (var i = 0; i < letras.length; i++) {
                while (valor >= numeros[i]) {
                    valor -= numeros[i];
                    numeroRomano += letras[i];
                }
            }
            return numeroRomano;
        },
        romanoParaDecimal: function (texto) {
            var n = 0;
            var numeralDaDireita = 0;
            for (var i = texto.length - 1; i >= 0; i--) {
                var valor = parseInt(traduzirNumeral(texto.charAt(i)));
                n += valor * Math.sign(valor + 0.5 - numeralDaDireita);
                numeralDaDireita = valor;
            }
            return n;
        },
        
    };
    return clazz;
}
