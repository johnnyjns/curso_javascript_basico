var peso = 72;
var altura = 1.76;

var ehDiferenteDeZero = (altura != 0);

if(ehDiferenteDeZero){
    var imc = peso / (altura * altura);
    console.log(Math.round(imc));
} else {
    console.log('Informa o valor da altura.');
}
