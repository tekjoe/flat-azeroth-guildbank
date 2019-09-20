const mongoose = require("mongoose");

// With mongoose, everything is derived from a schema. Here is where we define the Schema.
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  itemLevel: { type: Number, required: false },
  rarity: {
    type: String,
    enum: ["Common", "Uncommon", "Rare", "Epic"],
    default: "Common"
  },
  date: { type: Date, required: true, default: Date.now }
});

// Compile the schema into a Model. A model is a class with which we construct documents.
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
