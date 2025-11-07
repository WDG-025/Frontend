const comicContainerEl = document.querySelector("#comic-container");
const getComicBtn = document.getElementById("get-comic");

getComicBtn.addEventListener("click", getComic);

const rendercomic = (comicData) => {
  //   console.log(comicData);
  const { img, alt, title, year, month, day } = comicData;

  const date = new Date(year, month, day);
  //   console.log({ date });

  const formattedDate = Intl.DateTimeFormat("de-DE").format(date);
  //   console.log({ formattedDate });

  const html = `
    <figure class="h-full">
        <img 
            class="h-full w-full"
            src="${img}"
            alt="${alt}"
        />
        <figcaption class="flex justify-between contain-inline-size">
            <span>${title}</span>
            <time datetime="${year}-${month}-${day}">${formattedDate}</time>
        </figcaption>
    </figure>
  `;

  comicContainerEl.insertAdjacentHTML("afterbegin", html);
  //   comicContainerEl.innerHTML = html;
};

const renderError = (message) => {
  comicContainerEl.replaceChildren();
  const html = `
  <p class="p-3 bg-slate-800 border border-b-red-500">${message}</p>
  `;
  comicContainerEl.insertAdjacentHTML("afterbegin", html);
};

// fetch("https://xkcd-api-ridvanaltun.vercel.app/api/comics/random")
//   .then((response) => {
//     console.log("Aus dem fetch()");
//     if (!response.ok) throw new Error("Nicht OK. Versuch es nochmal.");
//     response.json();
//   })
//   .then((data) => rendercomic(data))
//   .catch((err) => renderError(err.message))
//   .finally(() => {
//     // Aufraeum-Schritte
//   });

async function getComic() {
  //   comicContainerEl.innerHTML = "";
  comicContainerEl.replaceChildren();
  getComicBtn.disabled = true;
  try {
    const res = await fetch(
      "https://xkcd-api-ridvanaltun.vercel.app/api/comics/random"
    );
    if (!res.ok) throw new Error("Nicht OK. Versuch es nochmal.");
    const data = await res.json();
    rendercomic(data);
  } catch (error) {
    renderError(error.message);
  } finally {
    getComicBtn.disabled = false;
  }
}

getComic();

console.log("console.log auf Zeile 74");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Im timeout");

//     if (Math.random() < 0.9) reject("FEHLSCHLAG");

//     resolve("ERFOLG");
//   }, 2000);
// });

// myPromise
//   .then((data) => console.log("resolve:", data))
//   .catch((err) => console.log("Error:", err));
