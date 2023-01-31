// Valores primitivos

// let scoreOne = 50

// let scoreTwo = scoreOne

// console.log(`scoreone: ${scoreOne} | scoretwo: ${scoreTwo}`);

// scoreOne = 100

// console.log(`scoreone: ${scoreOne} | scoretwo: ${scoreTwo}`);


// Valores de referência

let userOne = { name: 'Henrique', age: 19}
let userTwo = userOne

console.log(userOne, userTwo);

userOne.age = 31

console.log(userOne, userTwo);