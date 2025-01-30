// variavel

/**
 * nome = josé
 * var => pode alterar o valor e ele visivel no script inteiro
 * let => pode alterar o valor e ele visivel só onde esta sendo usado
 * const => não alterar o valor
 */

var nome = "Carlos"
console.log(nome)

// operadores aritimeticos
/**
 * + adição
 * - subtração
 * / divisão
 * % resto da divisão 10 % 3 = 1
 * * divisão
 * ** potência
//
//**
* > maior que
* < menor que
* >= maior igual
* <= menor igual
* == igual
* === igual de tipos de dados e valor
* !=desigualdade/diferente

numero1 = window.prompt("digite um numero")
console.log(numero)

lado = window.prompt("digite o lado do retangulo")
altura = window.prompt("digite a altura do retangulo")
console.log(lado * altura)

nome = window.prompt("digite seu nome")
console.log (`olá ${nome} que bom te ver`)
*/
/**
 * condicionais
 * if verificação uma condição (nome == Marcos) (10 > 2)
 * else if tem que ter um if antes e tb verifica uma condição
 * else só precisa de um if antes


if (nome == "Carlos"){
    console.log("Que nome comum, melhore!!")
}
else if(nome === "Jonas"){
    console.log("Vc faz parte de uma banda?")
}
else {
    window.alert("Não sabia que esse nome existia")
}
*/

var numero = window.prompt("digite o numero")
if (numero%2 == 0){
    console.log("o número é par, deu sorte.")
}
else{
    console.log("o número é ímpar, deu azar.")
}

/**
 * ! Não - Negação
 * and && E - conjunção(precisa das duas opções para ser verdade)
 * or || ou - disjunção (precisa de uma das opções para ser verdade)

var dia = "Terça"
var temDinheiro = true
if (dia == "Sabado" && temDinheiro == true){
    console.log("o numero é ímpar que azar")
}
else{
    console.log("o numero é ímpar que azar")
}
 */


