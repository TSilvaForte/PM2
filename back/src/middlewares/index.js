function postMovieInfoValidation(req, res, next) {
    const movieFields = ["title", "year", "director", "duration", "genre", "rate", "poster"];
    const movieMissingFields = movieFields.filter(field => !req.body[field]);

    if (movieMissingFields.length > 0) {
        return res.status(400).json({
            message: `Error al validar la información. Debe ingresar ${movieMissingFields.join(", ")}`
        });
    }
    next();
}

module.exports = postMovieInfoValidation;