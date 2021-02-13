const sprite = document.getElementById('sprite');
const pokemonName = document.getElementById('name');
const button = document.getElementById('pokemonBtn');
const pokemonType = document.getElementById('type');
button.addEventListener('click', generatePokemon);
window.addEventListener('keypress', generatePokemon);

generatePokemon();

function generateId() {
  const min = 151; /*2nd gen*/
  const max = 493; /*4th gen*/
  let randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
}

async function generatePokemon() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${generateId()}`,
    config
  );

  const data = await res.json();

  pokemonName.innerHTML = data.name;
  //console.log(data.types[0].type.name);
  pokemonType.innerHTML = data.types[0].type.name;
  sprite.src = data.sprites.front_default;
}
