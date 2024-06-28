//console.log(tempData);

// función para crear las tarjetas de películas
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

// función para renderizar las tarjetas
function renderMovies(movies) {
    const container = document.querySelector('.containercards');
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// función para obtener los datos del servidor usando jQuery
function loadMovies() {
    $.get('https://api.1rodemayo.com/movies/', (data) => {
        renderMovies(data);
    }).fail((error) => {
        console.error('Error loading movies:', error);
    });
}

// Llamar a la función para obtener y renderizar los datos al cargar la página
$(document).ready(loadMovies);


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