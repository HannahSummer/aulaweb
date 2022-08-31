const escola = "Hannah Laisa de Melo" 
// As funções abaixo trazem o resultado de acordo com a tabela ASCII
console.log(escola.charCodeAt(5))
console.log(escola.codePointAt(5))
// Retorna o tamanho da string
console.log(escola.length)
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola[5])
console.log(escola.indexOf('-'))

console.log(escola.substring(4))
console.log(escola.substring(0, 6))
console.log(escola.split("i"))
var nomes = escola.split("n")
nomes[2] = "Summer"
console.log(nomes)
console.log(nomes[0],nomes[2], nomes[4]) 
console.log(escola.split(" ")[4])
console.log(escola.split(" ")[4])
// Essa é uma forma de concatenar variaveis/arrays e formar uma frase
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola +"!")
// usando o  constructor
var frase = "Hello word!"
console.log(frase.constructor)

console.log(escola.replace('10', '5'))
var pessoa = [{nome : 'Hannah' , idade : 14 , peso: 42}, {nome : 'Henning' , idade : 38}]
// console.log(pessoa.split(','))
console.log(pessoa[0].idade + pessoa[1].idade)