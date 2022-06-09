import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <LinkButton to="/">Home </LinkButton>
      <LinkButton to="/about">About</LinkButton>
    </nav>
  );
}

const LinkButton = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 8px;
  color: black;

  &.active {
    background-color: lightseagreen;
    color: white;
  }
`;
