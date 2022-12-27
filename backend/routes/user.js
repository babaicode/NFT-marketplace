const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Current User information
router.get("/", auth, async (req, res) => {
  const profile = await User.findById(req.user._id);
  res.send(profile);
});
// Register User
router.post("/", async (req, res) => {
  const { email, userName, password } = req.body;

  // Checking User
  let user = await User.findOne({ email });
  console.log(user);
  if (user) return res.status(400).send(["User already exists"]);

  // Save User Into Database
  user = new User({ email, userName, password });
  await user.save();
  // Generate Token
  
  const jwtData = { _id: user._id, userName: user.userName };
  const login = jwt.sign(jwtData, process.env.JWTKEY, { expiresIn: "1d" });

  res.send(login);
});

module.exports = router;
