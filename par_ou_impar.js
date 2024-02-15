// 1) Verificação de número par ou ímpar:
// Escreva um programa que solicite ao usuário um número inteiro e exiba uma mensagem
// informando se o número é par ou ímpar

var input = require('readline-sync')

var numero = Number(input.question("Digite um numero: "))

if (numero % 2 === 0){
    console.log(`O Numero ${numero} é par`)
}
else{
    console.log(`O Numero ${numero} é impar`)
}