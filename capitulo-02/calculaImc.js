console.log('Bem-vindo!');
// Formula do imc é; peso X altura * altura
var peso = 72;
var altura = 1.76;
// var altura = 0;
var ehDiferenteDeZero = (altura != 0);

if(ehDiferenteDeZero){
    var imc = peso / (altura * altura);
    console.log(imc);
} else {
    console.log('Informa o valor da altura.');
}
