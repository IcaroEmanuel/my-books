import React from "react";
import styled from 'styled-components';

const MenusContainer = styled.ul`
  display: flex;
`;

const MenuListContainer = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  font-weight: 500;
`;

const MenuNameContainer = styled.p`
  margin-right: 30px;
`

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
