import React from "react";

import { HeaderContainer } from "./Header.styles";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div>
      <HeaderContainer>
        <h2>Map</h2>
        <h2>About</h2>
        <h2>Login</h2>
      </HeaderContainer>
    </div>
  );
};

export default Header;
