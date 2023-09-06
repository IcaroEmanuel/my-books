import React from "react";
import Logo from "../Logo";
import Menus from "../Menus";
import Icons from "../Icons";

import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Menus />
      <Icons />
    </header>
  );
}
