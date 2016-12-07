var peso = document.getElementById("peso-1").textContent;
var altura = document.getElementById("altura-1").textContent;
var nome = document.getElementById("nome-1").textContent;

var paciente = {
    peso : peso,
    altura : altura,
    nome : nome
};

if(paciente.altura !== 0){
    var imc = paciente.peso / ( paciente.altura * paciente.altura );
    var tdDoImc = document.getElementById("imc-1");
    tdDoImc.textContent = Math.round(imc);
    console.log(Math.round(imc));
} else {
    console.log('Informa o valor da altura.');
}
