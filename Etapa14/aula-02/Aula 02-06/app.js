class User {
    constructor (name, email) {
        this.name = name
        this.email = email
    }
}

const user = new User('Henrique', 'henrique@email.com')
const user2 = new User('Jonas', 'jonas@email.com')

console.log(user, user2);