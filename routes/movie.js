const express = require("express");

const router = express.Router();
const movieController = require("../controller/movieController");

router.get("/", movieController.getAllMovies);
router.get("/:movieId", movieController.getMovieById);
router.post("/", movieController.createMovie);
router.put("/:movieId", movieController.updateMovie);
router.delete("/:movieId", movieController.deleteMovie);

router.get("/title/:title", movieController.searchByTitle);
router.get("/:movieId/reviews", movieController.getReviewsByMovie);

module.exports = router;
