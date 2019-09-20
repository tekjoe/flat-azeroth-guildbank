const Item = require("../models/Item");

const getItems = (req, res) => {
  // Find all Items, return as JSON if successful, else return errors.
  Item.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json("Error: " + err));
};

const createItem = (req, res) => {
  // Use body-parser to parse incoming request bodies. Available under the req.body property
  const { name, quantity, rarity, itemLevel } = req.body;

  const newItem = new Item({ name, quantity, rarity, itemLevel });

  newItem
    .save()
    .then(() => {
      res.status(201).json("Entry successfully added.");
    })
    .catch(err => res.status(400).json("Error: " + err));
};

const updateItem = (req, res) => {
  // Ensure that id was included in the request as URL param
  if (!req.params.id) {
    return res.status(404).json({ message: "Not found, id is required" });
  }
  // Find item by id and update item in MongoDB.
  Item.findById(req.params.id).exec((err, item) => {
    if (!item) {
      return res.status(400).json({ message: "Item not found in Database" });
    } else if (err) {
      return res.status(400).json(err);
    }

    const { name, quantity, rarity, itemLevel } = req.body;

    item.name = name;
    item.quantity = quantity;
    item.rarity = rarity;
    item.itemLevel = itemLevel;

    item.save((err, item) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(item);
      }
    });
  });
};

const deleteItem = (req, res) => {
  // Find item by id and delete item from MongoDB.
  const { id } = req.params;
  Item.findByIdAndRemove(id).exec((err, item) => {
    if (err) {
      return res.status(404).json(err);
    } else {
      res.status(204).json(null);
    }
  });
};

module.exports = { getItems, createItem, updateItem, deleteItem };
