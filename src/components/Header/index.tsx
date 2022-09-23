import { Container } from "./styles";
import Logo from "../../assets/ignite-logo.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <img src={Logo} />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  );
}
