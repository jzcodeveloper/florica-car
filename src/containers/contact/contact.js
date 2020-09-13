import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";

import ContactTabs from "../../components/contact-tabs";
import ContactMap from "../../components/contact-map";
import {
  Container,
  Section,
  Title,
  Form,
  Flex,
  Row,
  Column,
  Label,
  Input,
  TextArea,
  Button,
  TabHeaders,
  TabHeader,
  Tab,
} from "./styles";
import { initialState } from "./data";

const Contact = () => {
  const [index, setIndex] = useState(0);

  const [state, setState] = useState(initialState);

  const { locale, formatMessage } = useIntl();

  useEffect(() => {
    document.title = `${formatMessage({ id: "link.contact" })} - Florida Car`;
  }, [locale]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const valid = e.target.reportValidity();

    if (!valid) return;

    try {
      const url = process.env.REACT_APP_BACKEND_URL + "/email";
      const payload = {
        to: "floridacar785@gmail.com",
        from: state.email,
        subject: `Florida Car / Message From Customer`,
        html: `<h2>You got a message from ${state.first_name} ${state.last_name}</h2>
          <p>${state.message}</p>
          <br/>
          <small>Phone Number: ${state.phone}</small>
          <small>Customer Name: ${state.first_name} ${state.last_name}</small>
        `,
      };

      const res = await axios.post(url, payload);
      setState(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const setCurrentIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <Section>
        <Title>
          <FormattedMessage id="form.contact" />
        </Title>

        <Form onSubmit={onSubmit}>
          <Flex>
            <Column>
              <Flex>
                <Column>
                  <Label htmlFor="first_name">
                    <FormattedMessage id="form.contact.first_name" />
                  </Label>
                  <Input
                    type="text"
                    name="first_name"
                    value={state.first_name}
                    onChange={onChange}
                    required
                  />
                </Column>

                <Column>
                  <Label htmlFor="last_name">
                    <FormattedMessage id="form.contact.last_name" />
                  </Label>
                  <Input
                    type="text"
                    name="last_name"
                    value={state.last_name}
                    onChange={onChange}
                    required
                  />
                </Column>
              </Flex>
              <Flex>
                <Column>
                  <Label htmlFor="email">
                    <FormattedMessage id="form.contact.email" />
                  </Label>
                  <Input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    required
                  />
                </Column>

                <Column>
                  <Label htmlFor="phone">
                    <FormattedMessage id="form.contact.phone" />
                  </Label>
                  <Input
                    type="text"
                    name="phone"
                    value={state.phone}
                    onChange={onChange}
                    required
                  />
                </Column>
              </Flex>
            </Column>
            <Column>
              <Label htmlFor="message">
                <FormattedMessage id="form.contact.message" />
              </Label>
              <TextArea
                rows={7}
                name="message"
                value={state.message}
                onChange={onChange}
                required
              />
              <Button>
                <FormattedMessage id="form.label.button" />
              </Button>
            </Column>
          </Flex>
        </Form>
      </Section>

      <Section>
        <Flex>
          <ContactTabs />
          <ContactMap />
        </Flex>
      </Section>
    </Container>
  );
};

export default Contact;
