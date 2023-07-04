const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 4001;
const Review = require("./models/review");
const Product = require("./models/product");
const mongoose = require("mongoose");
require("dotenv").config();

app.post("/upload", async (req, res) => {
  new_review = new Review({
    review_id: req.body.results[2].response,
    review_item: req.body.results[3].response,
    review_reaction: req.body.results[4].response,
    others: req.body.results[5].response,
  });
  //DB 연결 후 리뷰 저장
  await new_review.save();
  res.send("successfully stored event !!" + "\n");
});

app.get("/view", async (req, res) => {
  const product_list = await Product.find({});

  var send_product_list = [];
  product_list.forEach((element) => {
    send_product_list.push({
      product_item: element.product_item,
      product_detail: element.product_detail,
    });
  });

  res.json({ product_list: send_product_list, message: "success" });
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
});
