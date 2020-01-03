import React from "react";

import { HeaderContainer } from "./Header.styles";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div>
      <HeaderContainer>
        <h3>Map</h3>
        <h3>About</h3>
        <h3>Login</h3>
      </HeaderContainer>
    </div>
  );
};

export default Header;
