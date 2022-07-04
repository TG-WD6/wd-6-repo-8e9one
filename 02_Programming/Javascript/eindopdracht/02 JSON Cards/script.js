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

const fetchGen1 = async () => {
    for (let i = 1; i <= pokemonGen1; i++) {
        await getPokemon(i)
    }
}
const fetchGen2 = async () => {
    for (let i = 1; i <= pokemonGen2; i++) {
        await getPokemon(i)
    }
}
const fetchGen3 = async () => {
    for (let i = 1; i <= pokemonGen3; i++) {
        await getPokemon(i)
    }
}
const fetchGen4 = async () => {
    for (let i = 1; i <= pokemonGen4; i++) {
        await getPokemon(i)
    }
}
const fetchGen5 = async () => {
    for (let i = 1; i <= pokemonGen5; i++) {
        await getPokemon(i)
    }
}
const fetchGen6 = async () => {
    for (let i = 1; i <= pokemonGen6; i++) {
        await getPokemon(i)
    }
}
const fetchGen7 = async () => {
    for (let i = 1; i <= pokemonGen7; i++) {
        await getPokemon(i)
    }
}
const fetchGen8 = async () => {
    for (let i = 1; i <= pokemonGen8; i++) {
        await getPokemon(i)
    }
}
const fetchGen9 = async () => {
    for (let i = 1; i <= pokemonGen9; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonInfo(data)
}

const createPokemonInfo = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon-container__pokemon')


    const pokemonInnerHTML = `<div class="pokemon-container__pokemon-img">
    <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png alt="">
    </div>
    <div class="pokemon-container__pokemon-info">
        <div class="pokemon-container__primary-info">
            <div>
                <h3 class="pokemon-container__name">${pokemon.name}</h3>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
                alt="">
                <span class="pokemon-container__number"># ${pokemon.id}</span>
            </div>
            <div class="pokemon-container__types">
            <span class="pokemon-container__first-type">grass</span>
            <span class="pokemon-container__second-type"> poison</span>
        </div>
    </div>
    <div class="pokemon-container__secondary-info">
        <div>
            <div class="hp">HP: 60</div>
            <div class="atk">ATK: 62</div>
            <div class="def">DEF: 63</div>
        </div>
        <div>
            <div class="speed">SPEED: 60</div>
            <div class="sp-atk">SP.ATK: 80</div>
            <div class="sp-def">SP.DEF: 80</div>
        </div>
    </div>
    </div>`
    console.log(pokemon.types)
    pokemonEl.innerHTML = pokemonInnerHTML

    pokemonContainer.appendChild(pokemonEl)
}


fetchGen1()
// fetchGen2()
// fetchGen3()
// fetchGen4()
// fetchGen5()
// fetchGen6()
// fetchGen7()
// fetchGen8()

