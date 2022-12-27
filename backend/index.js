const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
require("./db/connectDB");
dotenv.config();
app.use(cors());
app.use(express.json());

// import routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const nftRoutes = require("./routes/nft");
const cartItemRoutes = require("./routes/cartItem");


// defining routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/nft", nftRoutes);
app.use("/api/cart", cartItemRoutes);

app.listen(PORT, () => console.log(`it's running on port${PORT}`));
