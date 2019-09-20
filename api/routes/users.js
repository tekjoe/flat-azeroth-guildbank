const router = require("express").Router();
const User = require("../models/User");

const { registerUser, loginUser } = require("../controllers/users");

router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
