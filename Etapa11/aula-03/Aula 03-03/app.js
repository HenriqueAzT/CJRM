const getTodos = callback => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 4

    if (isRequestOK) {
        callback(null, request.responseText)
        return
    }
    if(isRequestNotOK){
        callback('Não foi possível obter os dados', null)
    }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    request.send()
}

getTodos((error, data) => {
    console.log('callback executado');
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
})