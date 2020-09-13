import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--blue);
  z-index: 2;
  height: 90px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 700px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Home = styled.div`
  width: 150px;
  padding: 10px;

  @media (min-width: 700px) {
    padding: 5px 0 0 0;
  }
`;

export const Links = styled.div`
  flex: 1;
  display: none;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const Image = styled.img``;

export const StyledLink = styled(Link)`
  display: block;
  position: relative;
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  margin: 10px;
  margin-top: ${(props) => (props.sidebar ? "10px" : "5px")};

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 3px solid var(--green);
    width: 0;
    margin: 0 auto;
    transition: width 0.2s ease-in-out;
  }

  :hover::after {
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin: 0 30px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Div = styled.div`
  margin: 8px 0;
  border-bottom: 3px solid #dddddd;
`;

export const Sidebar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 90px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  transition: transform 0.5s ease-in-out;
  background-color: var(--blue);

  &.translate-enter {
    transform: translateY(100%);
  }
  &.translate-enter-active {
    transform: translateY(0);
  }
  &.translate-exit {
    transform: translateY(0);
  }
  &.translate-exit-active {
    transform: translateY(100%);
  }
`;
