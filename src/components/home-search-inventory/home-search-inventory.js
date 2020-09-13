import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { FormattedMessage } from "react-intl";
import { useLazyQuery } from "@apollo/client";
import queryString from "query-string";

import SelectFilter from "../inventory-filter-select";
import {
  Container,
  Title,
  Main,
  Search,
  Reset,
  Icon,
  Bottom,
  Message,
  Phone,
} from "./styles";
import { initialState, fields } from "./data";

const SearchInventory = () => {
  const history = useHistory();
  const [state, setState] = useState(initialState);

  const onChange = (name, value) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSearchClick = () => {
    const newState = {};
    for (const key in state) {
      if (state[key]) newState[key] = state[key];
    }
    history.push(`/inventory?${queryString.stringify(newState)}`);
  };

  const onResetClick = () => {
    setState(initialState);
  };

  return (
    <Container>
      <Title>
        <Icon className="fas fa-car" style={{ marginRight: "15px" }} />
        <FormattedMessage id="home.search_inventory" />
      </Title>
      <Main>
        {fields.map(({ field_type, ...field }) => {
          if (field_type === "Select") {
            return (
              <SelectFilter
                {...field}
                doc={state}
                onChange={onChange}
                style={{ flex: 1 }}
              />
            );
          }
        })}
        <Search onClick={onSearchClick}>
          <Icon className="fas fa-search" style={{ marginRight: "10px" }} />
          <FormattedMessage id="home.search" />
        </Search>
        <Reset onClick={onResetClick}>
          <Icon className="fas fa-undo" />
        </Reset>
      </Main>
      <Bottom>
        <Message>
          <Icon
            className="fas fa-question-circle"
            style={{ marginRight: "15px" }}
          />
          <FormattedMessage id="home.call_now" />
        </Message>
        <Phone>
          <Icon className="fas fa-phone-alt" style={{ marginRight: "15px" }} />
          305-200-9050
        </Phone>
      </Bottom>
    </Container>
  );
};

export default SearchInventory;
