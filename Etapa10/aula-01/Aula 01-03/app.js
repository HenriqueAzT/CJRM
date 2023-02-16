const past = new Date('April 28 2003 22:00:00')
const present = new Date()
const difference = present.getTime() - past.getTime()

console.log(difference);

const seconds = Math.round(difference / 1000)
console.log({seconds});

const minutes = Math.round(seconds / 60)
console.log({minutes});

const hours = Math.round(minutes / 60)
console.log({hours});

const days = Math.round(hours / 24)
console.log(days);
console.log(`Essa pessoa nasceu há ${days} dias`);

const years = Math.round(days / 365)
console.log(years);

const timestamp = 6521325

console.log(new Date(timestamp));