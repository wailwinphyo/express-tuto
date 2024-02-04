const Reviews = require("../model/review");
const mongoose = require("mongoose");

async function getAllReview() {
  return Reviews.find().populate("movie");
}

async function getReviewById(reviewId) {
  return Reviews.findById(reviewId).populate("movie");
}

async function createReview(review) {
  let newReview = new Reviews(review);
  newReview.movie = new mongoose.Types.ObjectId(review.movie);
  return (await newReview.save()).populate("movie");
}

async function updateReview(reviewId, review) {
  return await Reviews.findByIdAndUpdate(reviewId, review, { new: true });
}

async function deleteReview(reviewId) {
  return await Reviews.findByIdAndDelete(reviewId);
}

async function getReviewsByMovie(movieId) {
  return await Reviews.find({
    movie: new mongoose.Types.ObjectId(movieId),
  }).populate("movie");
}

module.exports = {
  getAllReview,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getReviewsByMovie,
};
