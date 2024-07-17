const {Movie, Repository} = require('./classes');

const repository = new Repository();

const loadMovies = () => {
    const movieContainer = document.querySelector('.containercards');
    const movies = repository.movies;

    movies.forEach(movie => {
        const card = createMovieCard(movie);
        movieContainer.appendChild(card);
    });
};

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>Director: ${movie.director}</p>
        <p>Año: ${movie.year}</p>
        <p>Duración: ${movie.duration}</p>
        <p>Género: ${movie.genre.join(', ')}</p>
        <p>Rate: ${movie.rate}</p>
    `;
    return card;
}

// const addMovies = () => {
//     $.get('https://api.1rodemayo.com/movies/', (data, status) => {
//         repository.createMovie(data);
//         loadMovies();
//     }).fail((error) => {
//         console.error('Error loading movies:', error);
//     });
// };

// $(document).ready(addMovies);

const axios = require("axios");

const promise = axios.get("https://api.1rodemayo.com/movies/");

promise.then((res) => {
    repository.createMovie(res.data);
    loadMovies();
}).catch((err) => {
    console.log('Error loading movies: ' + err.message);
});

$(document).ready(() => {
    promise;
});


