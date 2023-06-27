const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 4001;
const Review = require("./models/review");
const mongoose = require("mongoose");
require("dotenv").config();

app.post("/upload", async (req, res) => {
  new_review = new Review({
    review_id: req.body.results[2].response,
    review_name: req.body.results[3].response,
    review_item: req.body.results[4].response,
    review_product: req.body.results[5].response,
    review_reaction: req.body.results[6].response,
    others: req.body.results[7].response,
  });
  //DB 연결 후 리뷰 저장
  await new_review.save();
  res.send("successfully stored event !!" + "\n");
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
