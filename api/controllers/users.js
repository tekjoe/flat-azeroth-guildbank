const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  // Validate user input - express-validator?

  // Check if user exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  // Hash the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const { username, email } = req.body;
  const password = hashedPassword;

  const newUser = new User({ username, email, password });
  try {
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const loginUser = async (req, res) => {
  // Check if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Invalid Email" });

  // Check password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Invalid Password" });

  // Create and assign JWT
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("authToken", token).send({ token: `${token}` });
};

module.exports = { registerUser, loginUser };
