import React from "react";
import styled from "styled-components";

const Input = styled.input`
  min-height: 50px;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.small};
  color: #808080;
  width: 100%;
  border: none;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.primary900};
  font-size: ${({ theme }) => theme.typography.h5};
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 2px 2px rgba(0, 0, 0, 0.2);
`;

export default props => {
  return <Input {...props} />;
};
