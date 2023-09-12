import React from "react";
import styled from "styled-components";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const IconsContainer = styled.ul`
  display: flex;
`;

const IconContainer = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const ImageContainer = styled.img`
  margin-right: 30px;
`;

export default function Icons() {
  const icons = [perfil, sacola];

  return (
    <IconsContainer>
      <IconContainer className="icon">
        {icons.map((icon, index) => (
          <ImageContainer src={icon} alt={icon} key={index} />
        ))}
      </IconContainer>
    </IconsContainer>
  );
}
