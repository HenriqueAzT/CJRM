class User {
    constructor (name, email) {
        this.name = name
        this.email = email
        this.points = 0
    }

    login () {
        console.log(`${this.name} logou na aplicação`)
        return this
    }

    logout () {
        return `${this.name} deslogou na aplicação`
    }

    addPoint () {
        this.points++
        return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'} `
    }
}

const user = new User('Henrique', 'henrique@email.com')
const user2 = new User('Jonas', 'jonas@email.com')

user.login().addPoint()

console.log(user, user2);