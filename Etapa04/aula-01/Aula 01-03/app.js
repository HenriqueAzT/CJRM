//Criando um objeto literal

let user = {
    name: 'Jorge',
    age: 28,
    email: 'jorgecamargo@gmail.com',
    city: 'Rio de janeiro',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
}

console.log(user.age);

user.age = 27

console.log(user.age);

console.log(user['email']);

console.log(user['name']);

user['name'] = 'João'

console.log(user['name']);