const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// Register a new user

router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
    role,
    status: "active",
  });

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: "Username already exists" });
  }

  try {
    await user.save();
    res.status(200).send("User registered" + user);
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

router.get("/user", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password_hash");
  res.json(user);
});

module.exports = router;
