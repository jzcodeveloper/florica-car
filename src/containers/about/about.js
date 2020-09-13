import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "react-intl";

import Slide3 from "../../assets/images/slide_3.jpg";
import Slide1 from "../../assets/images/slide_1.jpg";
import Breadcrumbs from "../../components/breadcrumbs";
import {
  Container,
  Banner,
  Title,
  Main,
  Flex,
  Left,
  Right,
  Image,
  Column,
  Subtitle,
  Text,
  Paragraph,
  List,
  Item,
  Icon,
} from "./styles";

const About = () => {
  const { locale, formatMessage } = useIntl();
  const [title] = useState(formatMessage({ id: "link.about" }));

  useEffect(() => {
    document.title = `${title} - Florida Car`;
  }, [locale]);

  return (
    <Container>
      <Banner>
        <Title>
          <FormattedMessage id="link.about" />
        </Title>
      </Banner>
      <Main>
        <Breadcrumbs title={title} />
        <Flex>
          <Left>
            <Image src={Slide3} margin="0 30px 0 0" />
          </Left>
          <Right>
            <Column>
              <Subtitle>
                <FormattedMessage id="about.welcome.title" />
                <Text color="var(--green)"> Florida Car</Text>
              </Subtitle>
              <Paragraph>
                <FormattedMessage id="about.welcome.message" />
              </Paragraph>
            </Column>
          </Right>
        </Flex>

        <Flex>
          <Left>
            <Column>
              <Subtitle>
                <FormattedMessage id="about.core_values.title" />
              </Subtitle>
              <Paragraph>
                <FormattedMessage id="about.core_values.message" />
              </Paragraph>
              <List>
                <Item>
                  <Icon className="fas fa-check" />
                  <Text>
                    <FormattedMessage id="about.core_value_1" />
                  </Text>
                </Item>
                <Item>
                  <Icon className="fas fa-check" />
                  <Text>
                    <FormattedMessage id="about.core_value_2" />
                  </Text>
                </Item>
                <Item>
                  <Icon className="fas fa-check" />
                  <Text>
                    <FormattedMessage id="about.core_value_3" />
                  </Text>
                </Item>
              </List>
            </Column>
          </Left>
          <Right>
            <Image src={Slide1} margin="0 0 0 30px" />
          </Right>
        </Flex>
      </Main>
    </Container>
  );
};

export default About;
