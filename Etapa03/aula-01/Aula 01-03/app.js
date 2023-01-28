//function declaration

sayHi('Bla')

function sayHi(caraca) { // Funciona em qualquer local do código
    console.log(`${caraca}`);
}

//Function expression

const showFood = function () { // Funciona somente antes da sua invocação
    console.log('pizza');
}

showFood()