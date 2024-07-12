//console.log(tempData);
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

const addMovies = () => {
    $.get('https://api.1rodemayo.com/movies/', (data, status) => {
        repository.createMovie(data);
        loadMovies();
    }).fail((error) => {
        console.error('Error loading movies:', error);
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

$(document).ready(addMovies);




//document.addEventListener('DOMContentLoaded', function() {
    //const container = document.querySelector('.containercards');

    //tempData.forEach(movie => {
        //const card = document.createElement('div');
        //card.classList.add('card');

        //const poster = document.createElement('img');
        //poster.src = movie.poster;
        //poster.alt = `${movie.title} Poster`;

        //const title = document.createElement('h3');
        //title.textContent = movie.title;

        //const year = document.createElement('p');
        //year.textContent = `Year: ${movie.year}`;

        //const director = document.createElement('p');
        //director.textContent = `Director: ${movie.director}`;

        //const duration = document.createElement('p');
        //duration.textContent = `Duration: ${movie.duration}`;

        //const genre = document.createElement('p');
        //genre.textContent = `Genre: ${movie.genre.join(', ')}`;

        //const rating = document.createElement('p');
        //rating.textContent = `Rating: ${movie.rate}`;

        //card.appendChild(poster);
        //card.appendChild(title);
        //card.appendChild(year);
        //card.appendChild(director);
        //card.appendChild(duration);
        //card.appendChild(genre);
        //card.appendChild(rating);

        //container.appendChild(card);
    //});
//});