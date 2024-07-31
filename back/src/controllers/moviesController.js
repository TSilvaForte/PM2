//El controlador va a recibir la información necesaria para gestionar la data, 
//Luego va a conectarse con el servicio encargado de gestionar la data (service)
//Y finalmente va a responder la solicitud del cliente.
//Pero el que efectivamente va a conectarse con la base de datos para ejecutar la acción va a ser el servicio, no en controller

const { obtainMovies, createMovie } = require("../services/movieServices");

async function getMovies(req, res) {
    try {
        const movies = await obtainMovies();
        res.status(200).json({
            message: "Funciona correctamente",
            data: movies
        });
    } catch (err) {
        res.status(500).json({
            message: "Error al obtener las películas",
            data: error.message,
        });
    }
}

async function postMovies(req, res) {
    try {
        const newMovieData = req.body;
        await createMovie(newMovieData);
        res.status(200).json({
            message: "Se creó la nueva película con éxito",
            data: newMovieData
        });
    } catch (err) {
        res.status(500).json({
            message: "Error al crear la película",
            data: err.message,
        });
    }
}


module.exports = {getMovies, postMovies};