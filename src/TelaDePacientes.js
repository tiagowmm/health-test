function TelaDePacientes() {

    var clazz = {
        pegaPaciente: function () {
            // return new Paciente(document.querySelector("#nome").value,
            //     parseInt(document.querySelector("#idade").value),
            //     parseInt(document.querySelector("#peso").value),
            //     parseFloat(document.querySelector("#altura").value)
            // );
            return new Paciente(
                $("#nome").val(),
                $("#idade").val(),
                $("#peso").val(),
                $("#altura").val()
            );
        },
        exibeIMC: function (imc) {
            // $("#resultado").val("O IMC é " + imc); 
            document.querySelector("#resultado").innerHTML("O IMC eh " + imc);
        }
    };

    return clazz;
}

var ui = new TelaDePacientes();
var paciente = ui.pegaPaciente();

var imc = paciente.imc();
ui.exibeIMC(imc);

// Java

// public void buscaNoGoogle() {
//     WebDriver driver = new FirefoxDriver();
//     driver.get("http://www.google.com.br");

//     driver.findElement(By.name("q")).sendKeys("Alura");

//     System.out.println(driver.getPageSource());

//     driver.close();
// }