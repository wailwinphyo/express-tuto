const express = require("express");
const reviewController = require("../controller/reviewController");

const router = express.Router();

router.get("/", reviewController.getAllReview);
router.get("/:reviewId", reviewController.getReviewById);
router.post("/", reviewController.createReview);
router.put("/:reviewId", reviewController.updateReview);
router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;
