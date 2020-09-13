import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useIntl, FormattedMessage } from "react-intl";
import queryString from "query-string";

import InventoryFilters from "../../components/inventory-filters";
import InventoryVehicles from "../../components/inventory-vehicles";
import { Container, Banner, Title, Flex, Left, Right } from "./styles";

const Inventory = () => {
  const [params, setParams] = useState({});
  const { locale, formatMessage } = useIntl();
  const { search, pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(search);
    setParams(parsed);
  }, []);

  useEffect(() => {
    document.title = `${formatMessage({ id: "link.inventory" })} - Florida Car`;
  }, [locale]);

  const onChange = (name, value) => {
    const newParams = Object.assign({}, params);

    // Add key or replace value or delete key
    if (!params[name] && value) {
      newParams[name] = value;
    } else if (params[name] && value) {
      newParams[name] = value;
    } else {
      delete newParams[name];
    }

    setParams(newParams);
    history.push(`${pathname}?${queryString.stringify(newParams)}`);
  };

  return (
    <Container>
      <Banner>
        <Title>
          <FormattedMessage id="link.inventory" />
        </Title>
      </Banner>

      <Flex>
        <Left>
          <InventoryFilters params={params} onChange={onChange} />
        </Left>
        <Right>
          <InventoryVehicles params={params} onChange={onChange} />
        </Right>
      </Flex>
    </Container>
  );
};

export default Inventory;
