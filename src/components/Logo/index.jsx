import "./styles.css";
import logo from "../../imagens/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo do My Books" />
      <p>My Books</p>
    </div>
  );
}
