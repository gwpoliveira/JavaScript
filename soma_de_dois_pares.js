// 5) Soma dos números pares:
// Escreva um programa que solicite ao usuário um número inteiro positivo e calcule a soma
// de todos os números pares de 1 até o número informado.

var input = require('readline-sync')

var soma = 0

var num = Number(input.question('\nDigie um numero positivo para servir de parametro para pegar os numeros pares e fazer sua soma :\n'))

function soma_pares(num,soma){

    for ( let cont = 1; cont <= num; cont ++){
    
        if (cont % 2 == 0){        
    
            soma = cont + soma
    
        }
    }

    return console.log(soma)

}

soma_pares(num,soma)



