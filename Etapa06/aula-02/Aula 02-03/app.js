const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const isAValidUser = testUsername(username)

    if (isAValidUser) {
        feedback.textContent = 'username Válido'
    }else{
        feedback.textContent = 'O username deve conter entre 6 a 12 caracteres, e deve conter apenas letras'
    }
})

form.username.addEventListener('keyup', (event) => {
    const isAValidUser = testUsername(event.target.value);

    if (isAValidUser) {
        form.username.setAttribute('class', 'success')
    }else{
        form.username.setAttribute('class', 'error')
    }
})