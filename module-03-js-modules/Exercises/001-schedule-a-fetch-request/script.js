let counter = 1;

async function fetchPokeData() {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    if (!res.ok) throw new Error('Fetch failed');

    const { name, id } = await res.json();

    // const smallerObj = {
    //   name: data.name,
    //   id: data.id,
    // };

    console.log(name, id);

    counter++;
  } catch (error) {
    console.error(error);
  }
}

const intervalId = setInterval(() => {
  if (counter === 5) clearInterval(intervalId);
  fetchPokeData();
}, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000);
