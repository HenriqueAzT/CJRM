// Booleans e comparações

console.log(true, false, 'true', 'false');

// Métodos que podem retornar booleans

const email = 'asdasd@gmail.com'

const includes = email.includes('@') // Retorna um booblean se existir ou não o caractere especificado no parêntese
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger') // Também funciona em arrays

// Operadores de comparação

const age = 31

const name = 'roger'
// console.log(age == 31);
// console.log(age == 35);
// console.log(age != 31);
// console.log(age < 32);
// console.log(age > 30);
// console.log(age >= 31);

console.log(name == 'roger');
console.log(name == 'Roger');
console.log(name > 'belinha'); // o 'r' de roger vem depois do 'b' de belinha, por isso ele mostra true no console
console.log(name > 'Roger'); // e a letra minúscula é maior que a maiúsula
console.log(name > 'Belinha'); 
