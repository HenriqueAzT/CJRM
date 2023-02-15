const form = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if (inputValue.length) {
        console.log(inputValue);
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>    
        `
        event.target.reset()
    }
})