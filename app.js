const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://lola:Oluwafunmilola200611@cluster0.1bv9e.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas ✅"))
.catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port: ${PORT}`));
