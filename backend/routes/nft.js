const express = require("express");
const router = express.Router();
const Nft = require("../models/nft");

//Get Nft
router.get("/", async (req, res) => {
  Nft 
    .find()
    .then((result) => {
      res.send(result)
    })
});
//Get Nft by id
router.get("/:id", async (req, res) => {
  const id = req.params.id
  Nft
    .find({id:id})
    .then((result) => {
      res.send(result)
    })
});
//Like Nft
router.put("/like/:id", async (req, res) => {
  const id = req.params.id
  const update = { like: req.body.like };
  Nft.findOneAndUpdate({ id: id }, update, (err, nft) => {
    if (err) return res.status(500).send(err);
    return res.send(nft);
  });
});
//Dislike Nft
router.put("/dislike/:id", async (req, res) => {
  const id = req.params.id
  const update = { dislike: req.body.dislike };
  Nft.findOneAndUpdate({ id: id }, update, (err, nft) => {
    if (err) return res.status(500).send(err);
    return res.send(nft);
  });
});
// Add Item
router.post("/", async (req, res) => {
  const { name, price, quantity, tag, blockchain, description, id, like, dislike } = req.body;

  // Checking Nft
  let nft = await Nft.findOne({ name });
  if (nft) return res.status(400).send(["Nft already exists"]);

  // Save Item Into Database
  nft = new Nft({ name, price, quantity, tag, blockchain, description, id, like, dislike });
  await nft.save();
  res.send(nft);
});

module.exports = router;
