//REGEX

// ^javascript$ acha a palavra javascript, mas ela tem que estar sozinha 

// ^[a-z]$, faz a mesca coisa da regra acima, porém com um único caractere de A a Z

// ^[a-zA-Z]$, faz a mesca coisa da regra acima e também aceita letras maiúsculas

// ^[a-zA-Z]{6,10}$ A expressão {6,10} serve para especificar a quantidade de caracteres para serem analisados, nesse caso, uma palavra de 6 a 10 caracteres

// ^[a-zA-Z0-9]{6,10}$ Agora a expreção também aceita numeros

//^.{6,10}$ O caractere . representa qualquer caractere, incluindo os caracteres especiais como @