import React from "react";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

import { IconsContainer, IconContainer, ImageContainer } from "./Styles";


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
