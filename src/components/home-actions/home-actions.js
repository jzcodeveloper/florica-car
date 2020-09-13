import React from "react";
import { FormattedMessage } from "react-intl";

import { Container, Action, Icon, Column, Title, Description } from "./styles";

const HomeActions = () => {
  return (
    <Container>
      <Action to="/inventory">
        <Icon className="fas fa-car" />
        <Column>
          <Title>
            <FormattedMessage id="home.buy_now" />
          </Title>
          <Description>
            <FormattedMessage id="home.buy_now_description" />
          </Description>
        </Column>
      </Action>
    </Container>
  );
};

export default HomeActions;
