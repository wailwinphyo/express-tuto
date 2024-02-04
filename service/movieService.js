const Movies = require("../model/movie");

const getAllMovies = async () => {
  return await Movies.find();
};

const getMovieById = async (movieId) => {
  return await Movies.findById(movieId);
};

const createMovie = async (movie) => {
  let newMovie = new Movies(movie);
  return await newMovie.save();
};

const updateMovie = async (movieId, movie) => {
  return await Movies.findByIdAndUpdate(movieId, movie, { new: true });
};

const deleteMovie = async (movieId, movie) => {
  return await Movies.findByIdAndDelete(movieId);
};

const searchByTitle = async (movieTitle) => {
  return Movies.find({
    title: {
      $regex: movieTitle,
    },
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  searchByTitle,
};
