import React from "react";
import styled from "styled-components";

const GoldBar = styled.div`
  background: ${({ theme }) => theme.colors.primary900};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  padding: 0.5rem ${({ theme }) => theme.spacing.small};
`;

const Coin = styled.span`
  height: 1.4rem;
  width: 1.4rem;
  background: ${({ theme, variant }) =>
    (variant === "gold" && theme.colors.gold) ||
    (variant === "silver" && theme.colors.silver) ||
    (variant === "bronze" && theme.colors.bronze)};
  border-radius: 50%;
  display: inline-block;
  margin: auto 0.5rem;
`;

const Gold = styled.div`
  display: flex;
  align-items: center;
`;
const Silver = styled.div`
  display: flex;
  align-items: center;
`;
const Bronze = styled.div`
  display: flex;
  align-items: center;
`;

export default props => {
  return (
    <GoldBar {...props}>
      <Gold>
        <h4>100</h4>
        <Coin variant="gold" />
      </Gold>
      <Silver>
        <h4>99</h4>
        <Coin variant="silver" />
      </Silver>
      <Bronze>
        <h4>98</h4>
        <Coin variant="bronze" />
      </Bronze>
    </GoldBar>
  );
};
