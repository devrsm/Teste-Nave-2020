// Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://viacep.com.br/ws/96040420/json")
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var resposta = JSON.parse(xhr.responseText)
        console.log(`${resposta.logradouro}, 279, ${resposta.localidade}/${resposta.uf}`)
    }
}