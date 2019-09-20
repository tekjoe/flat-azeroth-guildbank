import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem;
`;

export default ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
