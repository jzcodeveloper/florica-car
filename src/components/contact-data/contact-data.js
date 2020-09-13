import React from "react";
import { FormattedMessage } from "react-intl";

import { Container, Row, Circle, Icon, Text, Bold } from "./styles";

const ContactData = () => {
  return (
    <Container>
      <Row>
        <Circle>
          <Icon className="fas fa-map-marker-alt" />
        </Circle>
        <Text>
          <Bold>
            <FormattedMessage id="contact.address" />
          </Bold>
          3275 NW 24th Street Rd, Miami, FL, 33142
        </Text>
      </Row>

      <Row>
        <Circle>
          <Icon className="fas fa-phone-alt" />
        </Circle>
        <Text>
          <Bold>
            <FormattedMessage id="contact.phone" />
          </Bold>
          305-200-9050
        </Text>
      </Row>

      <Row>
        <Circle>
          <Icon className="fas fa-calendar-alt" />
        </Circle>
        <Text>
          <Bold>
            <FormattedMessage id="contact.hours" />
          </Bold>
          Mon – Fri: 09:00AM – 09:00PM
          <br />
          Saturday: 09:00AM – 07:00PM
          <br />
          Sunday: Closed
        </Text>
      </Row>
    </Container>
  );
};

export default ContactData;
