import React from "react";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

import './styles.css'

export default function Icons() {
  const icons = [perfil, sacola];

  return (
    <ul className="icons">
      <li className="icon">
        {icons.map((icon) => (
          <img src={icon} alt={icon}></img>
        ))}
      </li>
    </ul>
  );
}
