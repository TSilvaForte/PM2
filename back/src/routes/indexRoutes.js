const {Router} = require ("express");
const getMovies = require ("../controllers/moviesController")

const router = Router();

router.get("/", getMovies);

module.exports = router