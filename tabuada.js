// 6 ) Tabuada:
// Escreva um programa que solicite ao usuário um número inteiro e exiba a tabuada desse número de 1 a 10.

var input = require('readline-sync')

var num = Number(input.question('\nDigie um número para ver sua tabuada :\n'))

function tabuada(num){
    for (cont=0; cont <= 10; cont++){
        let t = cont * num
        console.log(`${num} x ${cont} = ${t}`)
    }
}

tabuada(num)