fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log('Response:', response)
        return response.json()
    }) // Quando a promise dá certo
    .then(users => console.log(users))
    .catch(error => console.log(error)) // Quando a promise dá errado