import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Menus from "../Menus";
import Icons from "../Icons";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menus />
      <Icons />
    </HeaderContainer>
  );
}
