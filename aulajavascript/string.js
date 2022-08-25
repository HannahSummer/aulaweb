const escola = "8 5 10 9"
console.log(escola.length)
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola[5])
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('-'))
var notas = escola.split(' ')
console.log(notas)
console.log((+notas[0] + +notas[1] + +notas[2] + +notas[3]) / 4)
console.log(escola.substring(4))
console.log(escola.substring(0, 6))
console.log(escola.split("Carolina"))
var nomes = escola.split(" ")
nomes[2] = "Summer"
console.log(nomes)
console.log(nomes[0],nomes[2], nomes[4]) 
console.log(escola.split(" ")[4])
console.log(escola.split(" ")[4])

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola +"!") 

console.log(escola.replace('10', '5'))
var pessoa = [{nome : 'Hannah' , idade : 14 , peso: 42}, {nome : 'Henning' , idade : 38}]
// console.log(pessoa.split(','))
console.log(pessoa[0].idade + pessoa[1].idade)