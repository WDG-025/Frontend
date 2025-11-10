// GET data and add to DOM II
// ==========================

// **Objective:**

// Learn how to fetch data from an API and display it on a webpage using JavaScript and Tailwind CSS by creating cards for the first 150 Pokémon.

// **Instructions:**

// *   **Fetch Data:** Write JavaScript to fetch data for the first 150 Pokémon from the Pokémon API. [More info can be found here](https://pokeapi.co)
// *   **Display Data**: Populate the DOM with the fetched Pokémon data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.

// **Pokémon API:** A free API that provides information about Pokémon.

const pokeContainer = document.querySelector('#pokemon-container');

function renderPokeCard(data) {
  console.log(data);
  const html = `
         <article class="bg-teal-900 text-stone-100 flex flex-col items-center rounded-xl shadow">
          <img src="${data.sprites.front_shiny}" alt="">
          <h2 class="font-semibold capitalize">${data.name}</h2>
          <div class="flex gap-2 items-center justify-between w-full px-3">
            <label for="hp">HP</label>
            <meter value="${data.stats[0].base_stat}" max="100" id="hp">HP</meter>
          </div>
          <div class="flex gap-2 items-center justify-between w-full px-3">
            <label for="attack">Attack</label>
            <meter class="[&::-webkit-meter-optimum-value]:bg-red-500" value="${data.stats[1].base_stat}" max="100" id="attack">Attack</meter>
          </div>
          <div class="flex gap-2 items-center justify-between w-full px-3 pb-3">
            <label for="defense">Defense</label>
            <meter class="[&::-webkit-meter-optimum-value]:bg-blue-500" value="${data.stats[2].base_stat}" max="100"
              id="defense">Defense</meter>
          </div>
        </article>`;

  // pokeContainer.innerHTML = html;
  pokeContainer.insertAdjacentHTML('beforeend', html);
}

// renderPokeCard();

// fetch('https://pokeapi.co/api/v2/pokemon/ditto');

// const pokeId = Math.floor(Math.random() * 150);

// fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
//   .then((res) => res.json())
//   .then((data) => renderPokeCard(data));

// for (let i = 1; i < 10; i++) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then((res) => res.json())
//     .then((data) => renderPokeCard(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('Läuft immer, ob Fehler oder nicht'));
// }

async function fetchPokeData(pokeId) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    renderPokeCard(data);
  } catch (error) {
    console.log('Da lief etwas schief');
  }
}

for (let i = 1; i < 10; i++) {
  fetchPokeData(i);
}
