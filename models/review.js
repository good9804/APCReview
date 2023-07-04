const mongoose = require("mongoose");

// Define Schemes
const reviewSchema = new mongoose.Schema(
  {
    review_id: { type: String },
    review_item: { type: String },
    review_reaction: {
      type: Number,
    },
    others: { type: String },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Review", reviewSchema);
