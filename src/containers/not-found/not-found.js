import React from "react";
import { FormattedMessage } from "react-intl";

import { Container, Title } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Title>
        <FormattedMessage id="app.not_found" />
      </Title>
    </Container>
  );
};

export default NotFound;
