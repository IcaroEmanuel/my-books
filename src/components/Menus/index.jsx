import React from "react";

import { MenusContainer, MenuListContainer, MenuNameContainer } from "./Styles";
export default function Menus() {
  const menus = ["CATEGORIAS", "ESTANTE", "FAVORITOS"];
  
  return (
    <MenusContainer>
      <MenuListContainer>
        {menus.map((menu, index) => (
          <MenuNameContainer key={index}>{menu}</MenuNameContainer>
        ))}
      </MenuListContainer>
    </MenusContainer>
  );
}
