import React from "react";
import { FormattedMessage } from "react-intl";

import {
  Container,
  Title,
  Main,
  Flex,
  Column,
  Icon,
  Heading,
  Paragraph,
  Button,
} from "./styles";
import { sections } from "./data";

const HomeAbout = () => {
  return (
    <Container>
      <Title>
        <FormattedMessage id="home.choose_us" />
      </Title>
      <Main>
        {sections.map(({ icon, title, description }) => (
          <Flex key={title}>
            <Column>
              <Icon className={icon} />
              <Heading>
                <FormattedMessage id={title} />
              </Heading>
              <Paragraph>
                <FormattedMessage id={description} />
              </Paragraph>
            </Column>
          </Flex>
        ))}
      </Main>
      <Button to="/about-us">
        <FormattedMessage id="home.learn_more" />
      </Button>
    </Container>
  );
};

export default HomeAbout;
