const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
const MONGO_URI = "mongodb+srv://lola:Oluwafunmilola200611@cluster0.1bv9e.mongodb.net/";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit process on failure
  }
}

// Call Database Connection
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port: ${PORT}`));
