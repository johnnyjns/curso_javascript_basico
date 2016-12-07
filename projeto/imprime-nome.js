var trsPacientes = document.getElementsByClassName("paciente"); // array de <tr>s

for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++) {

    var pacienteTr = trsPacientes[posicaoAtual];

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

    console.log(pacienteAtual.nome);
}
