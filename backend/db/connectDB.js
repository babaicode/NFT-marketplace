const mongoose = require("mongoose");
// connect to db
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB Connected..."))