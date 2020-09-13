import React from "react";
import { FormattedMessage } from "react-intl";

import SelectFilter from "../inventory-filter-select";
import { Container, Header, Icon, Text } from "./styles";
import { fields } from "./data";

const InventoryFilters = ({ params, onChange }) => {
  return (
    <Container>
      <Header>
        <Icon className="fas fa-car" />
        <Text>
          <FormattedMessage id="filters.header" />
        </Text>
      </Header>

      {fields.map(({ field_type, ...field }) => {
        if (field_type === "Select") {
          return <SelectFilter {...field} doc={params} onChange={onChange} />;
        }
      })}
    </Container>
  );
};

export default InventoryFilters;
