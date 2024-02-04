const movieService = require("../service/movieService");
const reviewService = require("../service/reviewService");

async function getAllMovies(req, res) {
  const movies = await movieService.getAllMovies();
  res.json(movies);
}
async function getMovieById(req, res) {
  let movieId = req.params["movieId"];
  const movies = await movieService.getMovieById(movieId);
  res.json(movies);
}

async function getReviewsByMovie(req, res) {
  let movieId = req.params["movieId"];
  const reviews = await reviewService.getReviewsByMovie(movieId);
  res.json(reviews);
}

async function createMovie(req, res) {
  try {
    let movie = req.body;
    let savedMovie = await movieService.createMovie(movie);

    res.json(savedMovie);
  } catch (e) {
    res.status(400).json(e.message);
  }
}

async function updateMovie(req, res) {
  try {
    let movie = req.body;
    let movieId = req.params["movieId"];

    let updatedMovie = await movieService.updateMovie(movieId, movie);
    res.json(updatedMovie);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function deleteMovie(req, res) {
  try {
    let movieId = req.params["movieId"];

    let deletedMovie = await movieService.deleteMovie(movieId);
    res.json(deletedMovie);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function searchByTitle(req, res) {
  try {
    let title = req.params["title"];

    let movies = await movieService.searchByTitle(title);
    res.json(movies);
  } catch (e) {
    res.status(400).status(e);
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  searchByTitle,
  getReviewsByMovie,
};
