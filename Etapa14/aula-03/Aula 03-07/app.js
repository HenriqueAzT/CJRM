function Student(name, email) {
    this.name = name
    this.email = email
}

Student.prototype.login = function () {
    return `${this.name} fez login`
}

Student.prototype.comment = function () {
    return `${this.name} comentou`
}


const henrique = new Student('Henrique', 'henrique@email.com')
const jonas = new Student('Jonas', 'jonas@email.com')

console.log(henrique.login === jonas.login);
console.log(henrique.comment === jonas.comment);
