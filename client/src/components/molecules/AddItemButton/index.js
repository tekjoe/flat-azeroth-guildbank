import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../atoms/LinkButton";

export default () => {
  return (
    <LinkButton as={Link} to="/add">
      Add New Item
    </LinkButton>
  );
};
