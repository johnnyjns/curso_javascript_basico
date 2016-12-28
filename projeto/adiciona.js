var btn = document.querySelector("#adicionar-paciente");

btn.addEventListener("click", function(e){
  e.preventDefault();

  var campoNome = document.querySelector("#campo-nome");
  var campoPeso = document.querySelector("#campo-peso");
  var campoAltura = document.querySelector("#campo-altura");

  var pacienteNovo = "<tr class='paciente'>"+
                        "<td class='info-nome' id='nome-5'>" + campoNome.value + "</td>"+
                        "<td class='info-peso' id='peso-5'>" + campoPeso.value + "</td>"+
                        "<td class='info-altura' id='altura-5'>" + campoAltura.value + "</td>"+
                        "<td class='info-imc' id='imc-5'></td>"+
                    "</tr>";

  var tabela = document.querySelector("table"); //Retorna o primeiro elemento que possui o nome 'table'
  tabela.innerHTML = tabela.innerHTML + pacienteNovo;

  // campoNome.value = "";
  // campoPeso.value = "";
  // campoAltura.value = "";

  //alternativamente, voce pode remover os valores do formulário com a função padrão do formulário reset
  var formPaciente = document.querySelector("form");
  formPaciente.reset();

});
