// Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

function maiorString() {
    let strings = ["¬Contratar", "¬¬Contratar"];
    let retorno = strings.reduce(function (atual, proximo) {
        return atual.length > proximo.length ? atual : proximo;
    });
console.log(retorno)
}
maiorString()