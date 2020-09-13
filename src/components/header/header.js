import React from "react";
import { FormattedMessage } from "react-intl";

import {
  Container,
  Flex,
  Left,
  Right,
  Lang,
  Circle,
  Icon,
  Text,
  Item,
} from "./styles";

const Header = ({ locale, changeLocale }) => {
  return (
    <Container>
      <Flex>
        <Left>
          <Item>
            <Lang onClick={changeLocale}>
              {locale === "en" ? "Español" : "English"}
            </Lang>
          </Item>
        </Left>
        <Right>
          <Item>
            <Circle>
              <Icon className="fas fa-phone-alt" />
            </Circle>
            <Text>
              <FormattedMessage id="app.phone" />
            </Text>
          </Item>
          <Item>
            <Circle>
              <Icon className="fas fa-map-marker-alt" />
            </Circle>
            <Text>
              <FormattedMessage id="app.address" />
            </Text>
          </Item>
          <Item>
            <Circle>
              <Icon className="fas fa-calendar-alt" />
            </Circle>
            <Text>Mon - Sat 8:00 - 18:00</Text>
          </Item>
        </Right>
      </Flex>
    </Container>
  );
};

export default Header;
