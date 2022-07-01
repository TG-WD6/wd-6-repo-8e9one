const pokemonContainer = document.getElementById('pokemon-container')
const pokemonGen1 = 151;
const pokemonGen2 = 251;
const pokemonGen3 = 386;
const pokemonGen4 = 493;
const pokemonGen5 = 649;
const pokemonGen6 = 721;
const pokemonGen7 = 809;
const pokemonGen8 = 905;
const pokemonGen9 = 913;
// https://bulbapedia.bulbagarden.net/wiki/Category:Type_color_templates
const colors = {
    bug: '#A8B820',
    dark: '#705848',
    dragon: '#7038F8',
    electric: '#F8D030',
    fairy: '#EE99AC',
    fighting: '#C03028',
    fire: '#F08030',
    flying: '#A890F0',
    grass: '#78C850',
    ghost: '#705898',
    ground: '#E0C068',
    ice: '#98D8D8',
    normal: '#A8A878',
    water: '#6890F0',
    poison: '#A040A0',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
}

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonGen1; i++) {
        await getPokemon(i)
    }
}

const getpokemon = async (id) => {
    const src = `https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json`

}