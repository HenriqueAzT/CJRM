const randomNumbers = [36, 99, 37, 63]
//                                         (item, index, array)
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log({numbersGreaterThan37, randomNumbers});

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers);