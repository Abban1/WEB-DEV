
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Product Model
const Product = mongoose.model("Product", {
  productName: String,
  price: Number,
  quantity: Number,
  description: String
});

// User Model
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String
});

// Add Product
app.post("/user", async (req, res) => {
  const product = await Product.create(req.body);
  console.log("Product added");
  res.json(product);
});

// View Products
app.get("/user", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Update Product
app.put("/user/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
});

// Delete Product
app.delete("/user/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted successfully" });
});

// Add User
app.post("/admin", async (req, res) => {
  const user = await User.create(req.body);
  console.log("User added");
  res.json(user);
});

// View Users
app.get("/admin", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update User
app.put("/admin/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(user);
});

// Delete User
app.delete("/admin/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });
