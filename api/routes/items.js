const express = require("express");
const router = express.Router();
const {
  createItem,
  getItems,
  updateItem,
  deleteItem
} = require("../controllers/items");

router.get("/items", getItems);

router.put("/items/:id", updateItem);

router.delete("/items/:id", deleteItem);

router.post("/items", createItem);

module.exports = router;
