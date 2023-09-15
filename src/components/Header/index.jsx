import React from "react";
import Logo from "../Logo";
import Menus from "../Menus";
import Icons from "../Icons";

import HeaderContainer from "./Styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menus />
      <Icons />
    </HeaderContainer>
  );
}
