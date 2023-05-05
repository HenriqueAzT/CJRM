function Student(name, email) {
    this.name = name
    this.email = email
}

Student.prototype.login = function login() {
    return `${this.name} fez login`
}

Student.prototype.comment = function comment() {
    return `${this.name} comentou`
}

function TeacherAssistant(name, email, scheduledWeekPosts) {
    Student.call(this, name, email)
    this.scheduledWeekPosts = scheduledWeekPosts
}

TeacherAssistant.prototype = Object.create(Student.prototype)

TeacherAssistant.prototype.giveBadge = function giveBadge ({name}) {
    return `${this.name} deu uma medalha para ${name}`
}

const henrique = new Student('Henrique', 'henrique@email.com')
const jonas = new Student('Jonas', 'jonas@email.com')
const laura = new TeacherAssistant('Laura', 'laura@gmail.com', false)

console.log(henrique, laura);
console.log(laura.giveBadge(jonas));
console.log(laura.login());
console.log(laura.login === jonas.login);
