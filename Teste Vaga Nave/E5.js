// Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.

var dicionario = {4: "a", 3: "e", 1: "i", 5: "s"};
var MeContrata = "T35t3 d3 35t4g1o"
MeContrata = MeContrata.replace(/[4315]/g, troca => dicionario[troca]);
console.log(MeContrata)