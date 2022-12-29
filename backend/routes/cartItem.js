const express = require("express");
const router = express.Router();
const CartItem = require("../models/cartItem");

//Get CartItem
router.get("/", async (req, res) => {
  CartItem.find()
    .then((result) => {
      res.send(result);
    })
});
//Delete CartItem
router.delete("/:id", function (req, res) {
  let delid = req.params.id;
  CartItem.findOneAndDelete({ id: delid }, function (err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});
router.post("/", async (req, res) => {
  const { name, price, quantity, tag, blockchain, description, id } = req.body;

  // Checking cartItem
  let cartItem = await CartItem.findOne({ name });
  if (cartItem) return res.status(400).send(["It's already exists in cart"]);

  // Save CartItem Into Database
  cartItem = new CartItem({
    name,
    price,
    quantity,
    tag,
    blockchain,
    description,
    id,
  });
  await cartItem.save();
  res.send(cartItem);
});

module.exports = router;
