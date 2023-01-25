// Arrays

let heroes = ['Batman', 'Catwoman', 'Iron Man']

heroes[2] = 'Spider-Man'

const ages = [31, 25, 39, 40, 25]

const randomArray = ['Parker', 'Diana', 19, 18]


// Métodos de Array

// console.log(heroes.length);
const joinHeroes = heroes.join(' | ') // Concatena os Heróis e os separa pelo caractere colocado no parêntese
const indexOf25 = ages.indexOf(25) // Obteve o index da primeira ocorrência do número 25 no array ages, se o número não existir ele retornará -1
const moreHeroes = heroes.concat(['Superman', 'Wolverine']) // Junta arrayse não modifica o array inicial
const pushToHeroes = heroes.push('Wonder Woman', 'Hulk') // Adiciona valores no fim do array, mas modifica o array inicial
const popHeroes = heroes.pop() // Remove o último ítem de um array e o retorna

console.log(heroes);