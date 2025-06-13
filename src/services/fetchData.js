const NO_OF_CARDS = 16;

const alreadyUsedIDs = [];

function getRandomId() {
  let id = Math.floor(Math.random() * 643) + 1;

  // Keep generating until we find a new one
  while (alreadyUsedIDs.includes(id)) {
    id = Math.floor(Math.random() * 643) + 1;
  }

  alreadyUsedIDs.push(id);
  return id;
}

async function callPokemonAPI(id) {
  try {
    const fetchURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(fetchURL);
    const dataObject = await response.json();

    const image = dataObject.sprites.other.dream_world.front_default;
    return image || null;
  } catch (error) {
    console.error(`Failed to fetch Pokémon ID ${id}:`, error);
    return null;
  }
}

export default async function getPokemonImages() {
  const promises = [];

  for (let i = 1; i <= NO_OF_CARDS; i++) {
    promises.push(callPokemonAPI(getRandomId()));
  }

  return Promise.all(promises);
}
