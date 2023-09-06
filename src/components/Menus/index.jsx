import React from "react";

import "./styles.css";
export default function Menus() {
  const menus = ["CATEGORIAS", "ESTANTE", "FAVORITOS"];
  return (
    <ul className="menus">
      <li className="menu">
        {menus.map((menu) => (
          <p>{menu}</p>
        ))}
      </li>
    </ul>
  );
}
