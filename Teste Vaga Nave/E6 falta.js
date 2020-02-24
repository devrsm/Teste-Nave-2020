// Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "https://viacep.com.br/ws/96040420/json";
var jhttp = new XMLHttpRequest();
jhttp.open("GET", url, false);
jhttp.send(null);

console.log(jhttp)