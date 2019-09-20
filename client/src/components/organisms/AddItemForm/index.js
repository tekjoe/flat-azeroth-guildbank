import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import axios from "axios";
import Select from "../../atoms/Select";

const AddItemForm = styled.form``;

export default props => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemLevel, setItemLevel] = useState("");
  const [rarity, setRarity] = useState("Common");

  const handleSubmit = e => {
    e.preventDefault();
    const item = { name, quantity, itemLevel, rarity };
    axios
      .post("/api/items", item)
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <AddItemForm onSubmit={handleSubmit}>
      <Input
        placeholder="Item name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Input
        placeholder="Quantity"
        onChange={e => setQuantity(e.target.value)}
        value={quantity}
      />
      <Input
        placeholder="Item Level"
        onChange={e => setItemLevel(e.target.value)}
        value={itemLevel}
      />
      <Select value={rarity} onChange={e => setRarity(e.target.value)}>
        <option value="common">Common</option>
        <option value="Uncommon">Uncommon</option>
        <option value="Rare">Rare</option>
        <option value="Epic">Epic</option>
      </Select>
      <Button>Add Item</Button>
    </AddItemForm>
  );
};
