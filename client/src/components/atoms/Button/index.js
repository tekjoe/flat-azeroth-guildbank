import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  border: none;
  width: 100%;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  background: ${({ theme }) => theme.colors.gold};
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export default ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
