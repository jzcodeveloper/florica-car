import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { FormattedMessage } from "react-intl";

import { Container, StyledLink, Separator, Span } from "./styles";
import { routes } from "./data";

const Breadcrumbs = ({ title }) => {
  const { pathname } = useLocation();
  const [pathnames] = useState(pathname.split("/"));

  return (
    <Container>
      {pathnames.map((path, i) => {
        const link = "/" + path;

        if (i === pathnames.length - 1)
          return (
            <Fragment key={path}>
              <Separator>/</Separator>
              <Span>{title}</Span>
            </Fragment>
          );

        return (
          <Fragment key={path}>
            {i > 0 && <Separator>/</Separator>}
            <StyledLink to={link}>
              <FormattedMessage id={routes[link]} />
            </StyledLink>
          </Fragment>
        );
      })}
    </Container>
  );
};

export default Breadcrumbs;
