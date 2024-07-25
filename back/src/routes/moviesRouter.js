const {Router} = require ("express");
const moviesRouter = Router();
const postMovieInfoValidation = require ("../middlewares")
const {getMovies, postMovies} = require ("../controllers/moviesController")

moviesRouter.get("/", getMovies);
moviesRouter.post("/", postMovieInfoValidation, postMovies)

module.exports = moviesRouter;