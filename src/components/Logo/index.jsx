import logo from "../../imagens/logo.svg";

import { LogoContainer, ImageContainer } from "./Styles";

export default function Logo() {
  return (
    <LogoContainer>
      <ImageContainer src={logo} alt="Logo do My Books" />
      <p>My Books</p>
    </LogoContainer>
  );
}
