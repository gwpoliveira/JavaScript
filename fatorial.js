// 7) Fatorial:
// Escreva um programa que solicite ao usuário um número inteiro e calcule o número fatorial desse número. 
// O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número.

var input = require('readline-sync');

var num = Number(input.question('\nDigite um número para ver seu fatorial:\n'));

function fatorial(num){
  if (num < 0) {
    console.log('Não é possível calcular o fatorial de um número negativo.');
  } else {
    let fatorial = 1;
  
    for (let i = num; i >= 1; i--) {
      fatorial *= i;
    }
  
    return console.log(`O fatorial de ${num} é: ${fatorial}`);
  }
}


fatorial(num)