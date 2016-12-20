var trsPacientes = document.getElementsByClassName("paciente"); // array de <tr>s

percorreArray(trsPacientes, function(pacienteTr){

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var pacienteAtual = {   nome : tdNome.textContent,
        peso : tdPeso.textContent,
        altura : tdAltura.textContent,
        pegaImc : function(){

            if(this.altura !== 0){

                return imc = this.peso / ( this.altura * this.altura );

            } else {

                console.log('Informa o valor da altura.');

            }
        }
    };

    var imc = pacienteAtual.pegaImc();

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc.toFixed(2);

    console.log(imc.toFixed(2));
});

for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++) {

}
