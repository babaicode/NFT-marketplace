const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  id: { type: String, required: true },
  tag: { type: String, required: false },
  blockchain: { type: String, required: false },
  description: { type: String, required: false },
  like: {type: Boolean},
  dislike: {type: Boolean}
});

module.exports = mongoose.model("Nft", nftSchema);