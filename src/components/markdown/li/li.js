import React from "react";

import { Item, Icon } from "./styles";

const ListItem = ({ children }) => {
  return (
    <Item>
      <Icon className="fas fa-check" />
      {children}
    </Item>
  );
};

export default ListItem;
