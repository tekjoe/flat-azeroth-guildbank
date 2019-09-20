import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ItemSlot from "../../molecules/ItemSlot";
import Input from "../../atoms/Input";

const ItemList = styled.section`
  margin-bottom: 7rem;
`;

// Refactored component as a function component with useState hook
export default () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/api/items")
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  let filteredItems = items.filter(
    item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  return (
    <ItemList>
      <Input
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
        type="text"
      />
      {filteredItems.map(item => (
        <ItemSlot
          name={item.name}
          quantity={item.quantity}
          itemLevel={item.itemLevel}
          rarity={item.rarity}
          key={item._id}
        />
      ))}
    </ItemList>
  );
};
