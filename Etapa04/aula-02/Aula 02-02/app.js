// variáveis e escopo de bloco

const age = 31



if (true) {
    const age = 41
    console.log(`dentro do 1º do bloco de código ${age}`);
    if (true) {
        const age = 51
        console.log(`dentro do 2º do bloco de código ${age}`);
    }
}

console.log(`fora do bloco de código ${age}`);