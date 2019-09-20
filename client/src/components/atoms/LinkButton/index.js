import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  padding: 1rem;
  border: none;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  background: ${({ theme }) => theme.colors.gold};
  cursor: pointer;
  display: block;
  text-align: center;
`;

export default ({ children, ...props }) => {
  return <LinkButton {...props}>{children}</LinkButton>;
};
