// 2) Cálculo de média:
// Escreva um programa que solicite ao usuário três notas e calcule a média. Em seguida,
// exiba uma mensagem com a média e a seguinte classificação:
// Se a média for maior ou igual a 7, exiba "Aprovado".
// Se a média for menor que 7 e maior ou igual a 5, exiba "Recuperação".
// Se a média for menor que 5, exiba "Reprovado".

var input = require('readline-sync')

console.log('\nDigie três notas para poder ver a media e se está aprovado ou reprovado:\n')

const n01 = Number(input.question('Etre com a primeira nota: '))
const n02 = Number(input.question('Etre com a segunda nota: '))
const n03 = Number(input.question('Etre com a terceira nota: '))

var media = ((n01+n02+n03)/3)

if (media >= 7){

    console.log(`Aluno aprovado com media igual a ${media}`)

}else if (media < 7 & media >=5){

    console.log(`Aluno em prova final com media igual a ${media}`)

} else{
    
    console.log(`Aluno reprovado com media igual a ${media}`)
}


