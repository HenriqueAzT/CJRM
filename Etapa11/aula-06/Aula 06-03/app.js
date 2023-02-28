const getPokemons = async () => {
    const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
    const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
    const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

    const results = await Promise.all([bulbasaur, charmander, squirtle])

    results.forEach(async response => console.log(await response.json()))
}

console.log(getPokemons());