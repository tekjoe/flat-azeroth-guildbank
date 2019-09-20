const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));

// Connect to MongoDB database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

// Get notified if we connect successfully or if any errors occur
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("Connected to database");
});

// Import routers
const apiRouter = require("./api/routes/items");
const usersRouter = require("./api/routes/users");

// Mounts the specified middleware function at the specified path
app.use("/api/", apiRouter);
app.use("/users/", usersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// start a server and listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
