const ul = document.querySelector('ul')

// ul.remove()

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Novo Item'
    ul.append(li) // O append é utilizado para inserir um elemento no final, já o prepend no começo
})

ul.addEventListener('click', (event) => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})
