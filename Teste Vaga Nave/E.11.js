// Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.

const colaboradores = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const UsersOldtoNew = colaboradores.sort((a, b) => a.idade < b.idade ? 1 : -1 );
console.log(UsersOldtoNew)