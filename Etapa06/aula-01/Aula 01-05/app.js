const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(event.target.username.value);
})

const username = 'henrique'

const pattern = /^[a-z]{6,}$/

// const isAMactch = pattern.test(username)

// if (isAMactch) {
//     console.log('O teste da regex passou');
// }else{
//     console.log('O teste da regex não passou');
// }

const result = username.search(pattern) // resulta no index da string inserida

console.log(result); 