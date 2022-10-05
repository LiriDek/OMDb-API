const moviesListEl = document.querySelector(".results__list");
const searchValue = document.querySelector("input");
const searchResult = document.querySelector(".result__title--description")



async function main(value) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=ea7fe794&s=${value}`);
    const moviesDatas = await movies.json();
    console.log(moviesDatas)

    moviesListEl.innerHTML = moviesDatas.Search.map((name) => moviesHTML(name)).slice(0, 6).join("");
}

main();

function moviesHTML(name) {
    return `<div class="result__movie">
                <figure class="result__img--container">
                    <img src="${name.Poster}" alt="" class="result__img">
                </figure>
                <div class="result__movie--description">
                    <h3 class="result__title--description">${name.Title}</h3>
                </div>
            </div>`
}