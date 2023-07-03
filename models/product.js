const mongoose = require("mongoose");

// Define Schemes
const productSchema = new mongoose.Schema(
  {
    product_number: { type: String },
    product_item: { type: String },
    product_detail: { type: String },
    product_price: { type: Number },
    product_made: { type: String },
    product_image: { type: Buffer },
    product_others: { type: String, default: "" },
    review_list: [
      new mongoose.Schema(
        {
          review_title: { type: String },
          review_item: { type: String },
          review_content: { type: String },
          review_quantity: { type: Number },
          review_user_id: { type: String },
          review_order_date: { type: String },
        },
        {
          timestamps: true,
        }
      ),
    ],
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("Product", productSchema);
