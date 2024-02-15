// 3) Verificação de número positivo, negativo ou zero:
// Escreva um programa que solicite ao usuário um número e exiba uma mensagem
// informando se o número é positivo, negativo ou zero.

var input = require('readline-sync')

var numero = Number(input.question('\nDigie um número para saber se é positivo, negativo ou zero:\n'))

if (numero === 0) {
    console.log(`O número digitado é ${numero} e ele é o zero`)

} else if (numero > 0 ){
    console.log(`O número digitado é ${numero} e ele é positivo`)
    
} else{
    console.log(`O número digitado é ${numero} e ele é negativo`)

}