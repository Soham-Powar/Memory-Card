const NO_OF_CARDS = 16;

function getRandomId() {
  return Math.floor(Math.random() * 643) + 1;
}

function extractData(dataObject) {
  return dataObject.sprites.other.dream_world.front_default;
}

async function callPokemonAPI(id) {
  const fetchURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const response = await fetch(fetchURL, {
    mode: "cors",
  });

  const dataObject = await response.json();
  return extractData(dataObject);
}

export default async function getPokemonImages() {
  const promises = [];

  for (let i = 1; i <= NO_OF_CARDS; i++) {
    promises.push(callPokemonAPI(getRandomId()));
  }
  console.log(promises);

  return Promise.all(promises);
}
