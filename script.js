document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = 'db0e1cf595f022f82977f389e56e3581'
let urlBase = 'https://api.themoviedb.org/3/search/movie'

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
}
