class Student {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

const henrique = new Student('Henrique', 'henrique@email.com')
const jonas = new Student('Jonas', 'jonas@email.com')

console.log(henrique, jonas);