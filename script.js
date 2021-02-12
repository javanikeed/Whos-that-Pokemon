const sprite = document.getElementById('sprite')
const pokemonName = document.getElementById('name')
const button = document.getElementById('pokemonBtn')
button.addEventListener('click', generatePokemon)


function generateId() {
    const min = 1
    const max = 898
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}

async function generatePokemon(){
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    }

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${generateId()}`, config)

    const data = await res.json()

    pokemonName.innerHTML = data.name
    sprite.src = data.sprites.front_default
}