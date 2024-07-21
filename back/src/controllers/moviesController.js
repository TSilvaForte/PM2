const { obtainMovies } = require("../services/movieServices");

function getMovies (req, res) {
    res.status(200).json({
        message: "Funciona correctamente",
        data: obtainMovies ()
    });
}

module.exports = getMovies;