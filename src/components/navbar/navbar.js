import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { CSSTransition } from "react-transition-group";
import Logo from "../../assets/icons/app-icon-512.png";
import items from "./items";

import {
  Container,
  Navigation,
  Home,
  Links,
  Image,
  StyledLink,
  Hamburger,
  Div,
  Sidebar,
} from "./styles";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container>
      <Navigation>
        <Home>
          <Link to="/">
            <Image src={Logo} alt="Florida Car" />
          </Link>
        </Home>

        <Links>
          {items.map(({ id, to }) => (
            <StyledLink key={id} to={to}>
              <FormattedMessage id={id} />
            </StyledLink>
          ))}
        </Links>

        <Hamburger onClick={toggleSidebar}>
          <Div />
          <Div />
          <Div />
        </Hamburger>

        <CSSTransition
          in={showSidebar}
          classNames="translate"
          timeout={500}
          unmountOnExit
        >
          <Sidebar>
            {items.map(({ id, to }, i) => (
              <StyledLink
                key={id}
                to={to}
                sidebar={true}
                onClick={toggleSidebar}
              >
                <FormattedMessage id={id} />
              </StyledLink>
            ))}
          </Sidebar>
        </CSSTransition>
      </Navigation>
    </Container>
  );
};

export default Navbar;
