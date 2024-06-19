const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// Register a new user

router.post("/register", async (req, res) => {
  const {
    username,
    password,
    first_name,
    last_name,
    phone_number,
    gender,
    is_admin,
  } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
    first_name,
    last_name,
    phone_number,
    gender,
    is_admin,
  });

  if (
    !username ||
    !password ||
    !first_name ||
    !last_name ||
    !phone_number ||
    !gender
  ) {
    return res.status(400).send("All fields are required");
  }

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: "Username already exists" });
  }

  try {
    await user.save();
    res.status(200).send("User registered");
    console.log("new user:" + user);
  } catch (err) {
    res.status(400).send("Error registering user");
    console.log("Error registering user");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcryptjs.compare(password, user.password))) {
    return res.status(400).send("Invalid credentials");
  }

  const token = jwt.sign({ userId: user._id }, "secret_key");
  res.json({ token });
});

// Get user details
router.get("/user", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password_hash");
  res.json(user);
});

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update user details
router.put("/user/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

// find user by id
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password_hash");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});
module.exports = router;
