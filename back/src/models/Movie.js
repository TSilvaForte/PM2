//Acá vamos a incluir un modelo/estructura de los datos con los que vamos a trabajar
const mongoose = require ("mongoose");

const movieConfig = {
    title: {
        type: String,
        required: true,
        unique: true,
        min: [1, "Debe completar el título de la película"],
        max: 50,
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true,
        min: [1, "Debe completar el director de la película"],
        max: 50,
    },
    duration: String,
    genre: [String],
    rate: {
        type: Number,
        required: true
    },
    poster: String,
};

const movieSchema = new mongoose.Schema(movieConfig);

const Movie = mongoose.model("Movie", movieSchema);

//y ahora con esta const voy a poder utilizar los métodos
// por ejemplo Movie.create o Movie.find o Movie.updateOne o Movie.deleteOne

//esto lo vamos a exportar y lo va a requerir servicios, para reemplazar la tempbase que veníamos usando
module.exports = Movie;
