console.log(tempData);

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.containercards');

    tempData.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = `${movie.title} Poster`;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const year = document.createElement('p');
        year.textContent = `Year: ${movie.year}`;

        const director = document.createElement('p');
        director.textContent = `Director: ${movie.director}`;

        const duration = document.createElement('p');
        duration.textContent = `Duration: ${movie.duration}`;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${movie.genre.join(', ')}`;

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${movie.rate}`;

        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(director);
        card.appendChild(duration);
        card.appendChild(genre);
        card.appendChild(rating);

        container.appendChild(card);
    });
});

function toggleSound() {
    const audio = document.getElementById('background-audio');
    const soundIcon = document.getElementById('sound-icon');

    if (audio.muted) {
        audio.muted = false;
        soundIcon.classList.remove('fa-volume-mute');
        soundIcon.classList.add('fa-volume-up');
        soundIcon.classList.remove('muted');
    } else {
        audio.muted = true;
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
        soundIcon.classList.add('muted');
    }
}
