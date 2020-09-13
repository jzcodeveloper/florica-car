import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ContactData from "../contact-data";
import { Container, TabHeaders, TabHeader, Tab } from "./styles";

const ContactTabs = () => {
  const [index, setIndex] = useState(0);

  const setCurrentIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <TabHeaders>
        <TabHeader active={index === 0} onClick={setCurrentIndex.bind(null, 0)}>
          <FormattedMessage id="contact.sales" />
        </TabHeader>
      </TabHeaders>

      <TransitionGroup>
        <CSSTransition
          classNames="fade"
          timeout={1000}
          exit={false}
          key={index}
        >
          <Tab>{index === 0 ? <ContactData /> : null}</Tab>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default ContactTabs;
