localStorage.setItem('name', 'Henrique')
localStorage.setItem('age', '19')

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

localStorage.setItem('name', 'João')
localStorage.setItem('age', '61')

name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name, age);
