import React from "react";
import { FormattedMessage } from "react-intl";

import {
  Container,
  Main,
  Section,
  Heading,
  Bottom,
  StyledLink,
  Text,
  Margin,
  Social,
  Icons,
  Icon,
  Anchor,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Main>
        <Section>
          <Heading>
            <Text color="var(--green)">Florida Car</Text> Dealership
          </Heading>
          <Text color="#aaaaaa" size="0.8em">
            <FormattedMessage id="app.description" />
          </Text>
        </Section>
        <Section>
          <Heading>
            <FormattedMessage id="contact.hours" />
          </Heading>
          <Text color="#aaaaaa" size="0.8em">
            <Text bold>Mon – Fri:</Text> 09:00AM – 09:00PM
            <Margin />
            <Text bold>Saturday:</Text> 09:00AM – 07:00PM
            <Margin />
            <Text bold>Sunday:</Text> Closed
          </Text>
        </Section>
        <Section>
          <Heading>
            <FormattedMessage id="contact.social" />
          </Heading>
          <Social>
            <Anchor href="https://facebook.com" target="__blank">
              <Icons>
                <Icon className="fab fa-facebook fa-fw" />
              </Icons>
            </Anchor>

            <Anchor href="https://twitter.com" target="__blank">
              <Icons>
                <Icon className="fab fa-twitter fa-fw" />
              </Icons>
            </Anchor>

            <Anchor href="https://instagram.com" target="__blank">
              <Icons>
                <Icon className="fab fa-instagram fa-fw" />
              </Icons>
            </Anchor>
          </Social>
        </Section>
      </Main>
      <Bottom>
        <Text color="#aaaaaa" size="0.8em">
          Copyright © 2020. <StyledLink to="/">Florida Car</StyledLink>
        </Text>
      </Bottom>
    </Container>
  );
};

export default Footer;
