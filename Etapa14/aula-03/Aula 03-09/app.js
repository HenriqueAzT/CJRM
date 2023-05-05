class User {
    #counter = 0

    constructor (name, email) {
        this.name = name;
        this.email = email
    }
    
    incrementCounter () {
        return ++this.#counter
    }
    
}

const createUser = (name, email) => { //O MELHOR PARA SER USADO (factory function)
    let counter = 0;
    return {
        name,
        email,
        incrementCounter: () => ++counter
    }
}

const user = new User('Henrique', 'henrique@gmail.com')
const user2 = createUser('Henrique', 'henrique@gmail.com')

console.log(user, user2.counter);
console.log(user.incrementCounter());
console.log(user2.incrementCounter());
console.log(user2.incrementCounter());
console.log(user2.incrementCounter());

// class a {
//     first () {
//         return 1
//     }
//     second () {
//         return 'aaaaa'
//     }
// }
// class b extends a {
//     third () {
//         return 3
//     }
// }

// const obj = new b()

const a = {
    first () {
        return 1
    }
}

const b = {
    second () {
        return 'aaaaa'
    }
}

const c = {
    third () {
        return 3
    }
}

const obj = {
    ...a,
    ...c
}

console.log(obj);
