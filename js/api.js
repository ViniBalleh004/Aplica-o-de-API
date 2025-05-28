'use strict'; // Modo restrito

// Verifica se o CEP é váido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`

    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        //hasOwnProperty retorna um valor booleano indicando se o objetivo possui a propriedade especifica no parenteses
        if(addres.hasOwnProperty('erro')){
            alert("CEP não encontrado");
        } else{
            preencherFormulario(addres);
        }
    }
}

//Função para Limpar formulário
limparFormulario = () =>{
    document.getElementById('rua').value = s ` ` ;
    document.getElementById('bairro').value = s ` ` ;
    document.getElementById('rua').value = s ` ` ;
    document.getElementById('rua').value = s ` ` ;


}