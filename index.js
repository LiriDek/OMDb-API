const moviesListEl = document.querySelector(".results__list");
const val = document.querySelector("input");
const searchResult = document.querySelector(".result__title--description");

async function onSearchEnter(event) {
    const val = document.querySelector("input").value;
    if (event.keyCode === 13) {
        renderMovies(val)
    }
}

async function onClicking(event) {
    const val = document.querySelector("input").value;
    renderMovies(val)
}

async function renderMovies(val) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=ea7fe794&s=${val}`);
    const moviesDatas = await movies.json();
    console.log(moviesDatas)
    let result = val;
    searchResult.innerHTML = result;
    moviesListEl.innerHTML = moviesDatas.Search.map((name) => moviesHTML(name)).slice(0, 9).join("");
}


function moviesHTML(name) {
    if (`${name.Poster}` !== "N/A") {
        return `<div class="result__movie">
                    <figure class="result__img--container">
                        <img src="${name.Poster}" alt="" class="result__img">
                    </figure>
                    <div class="result__movie--description">
                        <h3 class="result__title--description">${name.Title}</h3>
                    </div>
                </div>`
    }
}