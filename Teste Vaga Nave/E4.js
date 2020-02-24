//E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.

function SemNumeros() {
    var string = "teste 1 de 2 string 3";
    var newString = string.replace("1","[removido]").replace("2", "[removido]").replace("3", "[removido]")
console.log(newString)
}
SemNumeros()