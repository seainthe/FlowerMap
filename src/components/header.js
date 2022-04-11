import React from "react";
import { StyledHeader } from "../css/styledHeader";

function Header({ query }) {
  return (
    <StyledHeader query={query}>
      FLOWER MAP<p>This site made for portfolio</p>
    </StyledHeader>
  );
}

export default Header;