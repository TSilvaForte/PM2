class Movie {
    constructor(poster, title, director, year, duration, genre, rate) {
        this.poster = poster;
        this.title = title;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
    }
}

class Repository {
    constructor() {
        this.movies = [];
    }

    createMovie(movieData) {
        movieData.forEach(movie => {
            const newMovie = new Movie(
                movie.poster,
                movie.title,
                movie.director,
                movie.year,
                movie.duration,
                movie.genre,
                movie.rate
            );
            this.movies.push(newMovie);
        });
    }
}

module.exports = {Movie, Repository};