// Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.
const colaboradores = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const saudacao = colaboradores.map( colaboradores => `Olá, ${colaboradores.nome.replace(/^./, colaboradores.nome[0].toUpperCase())}`+` ${colaboradores.sobrenome}!`);

console.log(saudacao)