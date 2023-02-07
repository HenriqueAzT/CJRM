const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const userRegex = /^[a-zA-Z]{6,12}$/

    const isAValidUser = userRegex.test(username)

    if (isAValidUser) {
        feedback.textContent = 'username Válido'
    }else{
        feedback.textContent = 'O username deve conter entre 6 a 12 caracteres, e deve conter apenas letras'
    }
})