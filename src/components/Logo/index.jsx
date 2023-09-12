import styled from "styled-components";
import logo from "../../imagens/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const ImageContainer = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <ImageContainer src={logo} alt="Logo do My Books" />
      <p>My Books</p>
    </LogoContainer>
  );
}
