import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 78px;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 2px 2px rgba(0, 0, 0, 0.2);
`;

const ItemLevel = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`;

const Title = styled.h5`
  color: ${({ theme, rarity }) =>
    (rarity === "Common" && theme.colors.white) ||
    (rarity === "Uncommon" && theme.colors.green) ||
    (rarity === "Rare" && theme.colors.blue) ||
    (rarity === "Epic" && theme.colors.purple)};
`;

const Quantity = styled.h3`
  color: ${({ theme }) => theme.colors.white};
`;

export default ({ name, quantity, itemLevel, rarity }) => {
  return (
    <Item>
      <div>
        <Title rarity={rarity}>{name}</Title>
        <ItemLevel>Item Level {itemLevel}</ItemLevel>
      </div>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
};
