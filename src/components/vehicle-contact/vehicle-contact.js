import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { useIntl, FormattedMessage } from "react-intl";
import axios from "axios";

import {
  Container,
  Information,
  Form,
  Row,
  Icon,
  Circle,
  Heading,
  Text,
  Italic,
  Anchor,
  Flex,
  Column,
  Label,
  Input,
  TextArea,
  Button,
} from "./styles";
import { initialState } from "./data";

const VehicleContact = ({ vehicle }) => {
  const { formatMessage } = useIntl();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const id = "form.contact.default_message";
    setState((prev) => ({ ...prev, message: formatMessage({ id }) }));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const valid = e.target.reportValidity();

    if (!valid) return;

    try {
      const url = process.env.REACT_APP_BACKEND_URL + "/email";
      const payload = {
        to: "floridacar785@gmail.com",
        from: state.email,
        subject: `Florida Car / Message From Customer About ${vehicle.title}`,
        html: `<h2>You got a message from ${state.name} about ${vehicle.title}</h2>
          <p>${state.message}</p>
          <br/>
          <small>Phone Number: ${state.phone}</small>
          <small>Customer Name: ${state.name}</small>
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

  return (
    <Container>
      <Information>
        <Row>
          <Icon className="far fa-envelope" />
          <Heading>
            <FormattedMessage id="vehicle.contact.information" />
          </Heading>
        </Row>
        <Row>
          <Circle>
            <Icon className="fas fa-map-marker-alt" />
          </Circle>
          <Text>{vehicle.vender_address}</Text>
        </Row>
        <Row>
          <Circle>
            <Icon className="fas fa-phone-alt" />
          </Circle>
          <Text>
            <Italic>
              <FormattedMessage id="vehicle.contact.phone" />:
            </Italic>
            {vehicle.vender_phone}
          </Text>
        </Row>
        <Row>
          <Circle>
            <Icon className="far fa-envelope" />
          </Circle>
          <Text>
            <Italic>
              <FormattedMessage id="vehicle.contact.email" />:
            </Italic>
            <Anchor href={`mailto:${vehicle.vender_email}`}>
              {vehicle.vender_email}
            </Anchor>
          </Text>
        </Row>
      </Information>

      <Form onSubmit={onSubmit}>
        <Row>
          <Icon className="far fa-paper-plane" />
          <Heading>
            <FormattedMessage id="vehicle.contact.vender" />
          </Heading>
        </Row>

        <Flex>
          <Column>
            <Label htmlFor="name">
              <FormattedMessage id="form.label.name" />
            </Label>
            <Input
              type="text"
              name="name"
              value={state.name}
              onChange={onChange}
              required
            />

            <Label htmlFor="phone">
              <FormattedMessage id="form.label.phone" />
            </Label>
            <Input
              type="text"
              name="phone"
              value={state.phone}
              onChange={onChange}
              required
            />

            <Label htmlFor="email">
              <FormattedMessage id="form.label.email" />
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
            <Label htmlFor="message">
              <FormattedMessage id="form.label.message" />
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
    </Container>
  );
};

export default VehicleContact;
