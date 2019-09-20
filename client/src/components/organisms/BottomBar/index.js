import React from "react";
import styled from "styled-components";
import GoldBar from "../../molecules/GoldBar";
import AddItemButton from "../../molecules/AddItemButton";
import { isAuthorized } from "../../../utils/auth";

const BottomBar = styled.div`
  position: fixed;
  left: 1.25rem;
  bottom: 0px;
  width: 89vw;
  margin-bottom: 0.5rem;
`;

// Only show AddItemButton if authenticated + authorized
export default props => {
  return (
    <BottomBar>
      <GoldBar />
      {isAuthorized() ? <AddItemButton /> : null}
    </BottomBar>
  );
};
