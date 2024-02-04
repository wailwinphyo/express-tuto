const reviewService = require("../service/reviewService");

async function getAllReview(req, res) {
  let reviews = await reviewService.getAllReview();

  res.json(reviews);
}

async function getReviewById(req, res) {
  let reviewId = req.params["reviewId"];
  let reviews = await reviewService.getReviewById(reviewId);

  res.json(reviews);
}

async function createReview(req, res) {
  try {
    let review = req.body;
    let savedReview = await reviewService.createReview(review);
    res.json(savedReview);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
}

async function updateReview(req, res) {
  try {
    let review = req.body;
    let reviewId = req.params["reviewId"];
    let updatedReview = await reviewService.updateReview(reviewId, review);
    res.json(updatedReview);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function deleteReview(req, res) {
  try {
    let reviewId = req.params["reviewId"];
    let deletedReview = await reviewService.deleteReview(reviewId);
    res.json(deletedReview);
  } catch (e) {
    res.status(400).json(e);
  }
}

module.exports = {
  getAllReview,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
