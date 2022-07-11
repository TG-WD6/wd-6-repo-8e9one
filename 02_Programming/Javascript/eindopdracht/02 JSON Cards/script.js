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
    // console.log(data.types[1])
}

const createPokemonInfo = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon-container__pokemon')

    //NAME 
    // https://pokeapi.co/
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    //NUMBER
    const number = pokemon.id.toString().padStart(3, '0')

    // TYPES FOR INFO CARD
    const pokemonTypes = pokemon.types.map(type => type.type.name)
    console.log(pokemonTypes)

    // STATS FOR INFO CARD
    // https://pokeapi.co/docs/v2#stats
    const hp = pokemon.stats[0].base_stat;
    const atk = pokemon.stats[1].base_stat;
    const def = pokemon.stats[2].base_stat;
    const speed = pokemon.stats[5].base_stat;
    const spAtk = pokemon.stats[3].base_stat;
    const spDef = pokemon.stats[4].base_stat;

    const pokemonInnerHTML = `<div class="pokemon-container__pokemon-img">
    <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png alt="">
    </div>
    <div class="pokemon-container__pokemon-info">
        <div class="pokemon-container__primary-info">
            <div>
                <h3 class="pokemon-container__name">${name}</h3>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
                alt="">
                <span class="pokemon-container__number"># ${number}</span>
            </div>
            <div class="pokemon-container__types">
            <span class="pokemon-container__first-type">${pokemonTypes[0]}</span>
            <span class="pokemon-container__second-type">${pokemonTypes[1]}</span>
        </div>
    </div>
    <div class="pokemon-container__secondary-info">
        <div>
            <div class="hp">HP: ${hp}</div>
            <div class="atk">ATK: ${atk}</div>
            <div class="def">DEF: ${def}</div>
        </div>
        <div>
            <div class="speed">SPEED: ${speed}</div>
            <div class="sp-atk">SP.ATK: ${spAtk}</div>
            <div class="sp-def">SP.DEF: ${spDef}</div>
        </div>
    </div>
    </div>`

    if (pokemonTypes === undefined) {
        document.classList.remove('pokemon-container__second-type')
    }
    pokemonEl.innerHTML = pokemonInnerHTML

    pokemonContainer.appendChild(pokemonEl)
}


// fetchGen1()
fetchGen2()
// fetchGen3()
// fetchGen4()
// fetchGen5()
// fetchGen6()
// fetchGen7()
// fetchGen8()

