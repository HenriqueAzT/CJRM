// else e else if statements

const password = 'asg12321'

if(password.length >= 12){
    console.log('Senha Muito Forte');
} else if(password.length >= 8){
    console.log("Senha Forte");
} else{
    console.log('Senha Fraca, ela deve conter 8 ou mais caracteres');
}