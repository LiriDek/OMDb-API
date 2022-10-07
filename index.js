const moviesListEl = document.querySelector(".results__list");
const val = document.querySelector("input");
const searchResult = document.querySelector(".result__title--description");
let moviesDatas;

async function onSearchEnter(event) {
    const val = document.querySelector("input").value;
    if (event.keyCode === 13) {
        loadMovies(val)
    }
}

async function onClicking(event) {
    const val = document.querySelector("input").value;
    loadMovies(val)
}

function filterMovies(event) {
        const filter = event.target.value
        if (filter === "NEW_TO_OLD") {
            moviesDatas.Search.sort((a, b) => a.Year - b.Year)
        }
        else if (filter === "OLD_TO_NEW") {
            moviesDatas.Search.sort((a, b) => b.Year - a.Year)
        } 
        else if (filter === "A-Z") {
            moviesDatas.Search.sort((a, b) => a.Title.localeCompare(b.Title))
        }
        moviesListEl.innerHTML = moviesDatas.Search.map((name) => moviesHTML(name)).slice(0, 6).join("")
    }

async function loadMovies(val) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=ea7fe794&s=${val}`);
    moviesDatas = await movies.json();
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
                        <h3 class="result__year-release--description">${name.Year}</h3>
                    </div>
                </div>`
    }
}