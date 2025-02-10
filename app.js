const express = require("express");
const mongoose = require("mongoose");

const app = express();


mongoose.connect("mongodb+srv://lola:Oluwafunmilola200611@cluster0.1bv9e.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas ✅"))
.catch(err => console.error("MongoDB connection error:", err));



// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));
