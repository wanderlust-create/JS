const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "53fdb133",
            s: searchTerm
        }
    })
    // check for status 200 but no results
    // better: return error message
    if (response.data.Error) {
        return []
    }
    return response.data.Search
}
const root = document.querySelector('.autocomplete')
// creating this in the JS file allows duplication of the autocomplete and decoupling of the dependent code in HTML
root.innerHTML = `
    <label><b>Search for a movie</b></label>
    <input class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`
const input = document.querySelector('input')
const dropdown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results')

const onInput = async event => {
    // will return a promise because fetchData is an asyn func
    const movies = await fetchData(event.target.value)
    // with no results, better to add message
    if (!movies.length) {
        dropdown.classList.remove('is-active')
        return
    }
    resultsWrapper.innerHTML = '' // clear existing when new search is made 
    dropdown.classList.add('is-active')// Bluma
    for (let movie of movies) {
        const movieOption = document.createElement('a')// 'a' from Bluma requirement
        const imgSRC = movie.Poster === 'N/A' ? '' : movie.Poster // if link is missing

        movieOption.classList.add('dropdown-item')// Bluma class
        movieOption.innerHTML = `
        <img src="${imgSRC}">
        ${movie.Title}
        `
        movieOption.addEventListener('click', () => {
            dropdown.classList.remove('is-active')
            input.value = movautocomplete funtion completeie.Title
            onMovieSelect(movie)
        })
        resultsWrapper.appendChild(movieOption)
    }
}
input.addEventListener('input', debounce(onInput, 500))
// to close the dropdown menu if user clicks outside of the root
document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active')
    }
})

const onMovieSelect = async movie => {
        const response = await axios.get("http://www.omdbapi.com/", {
            params: {
                apikey: "53fdb133",
                i: movie.imdbID }
        })
        document.querySelector('#summary').innerHTML = movieTemplate(response.data)
    }

    const movieTemplate = (movieDetail) => {
        return `
            <artile class="media">
                <figure class-"media-left>
                    <p class="image">
                        <img src="${movieDetail.Poster}" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <h1>${movieDetail.Title}</h1>
                        <h4>${movieDetail.Genre}</h4>
                        <p>${movieDetail.Plot}</p>
                    </div>
                </div>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.Awards}</p>
                <p class="subtitle">Awards</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.BoxOffice}</p>
                <p class="subtitle">BoxOffice</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.Metascore}</p>
                <p class="subtitle">Metascore</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.imbdRating}</p>
                <p class="subtitle">IMBD Rating</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movieDetail.imdbVotes}</p>
                <p class="subtitle">IMDB Votes</p>
            </article>
        `
    }
