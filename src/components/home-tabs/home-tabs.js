import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomeCars from "../home-cars";
import SearchInventory from "../home-search-inventory";
import {
  Container,
  Top,
  Title,
  Title2,
  TabHeaders,
  TabHeader,
  Tab,
} from "./styles";

const HomeTabs = () => {
  const [index, setIndex] = useState(0);

  const setCurrentIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <Top>
        <Title>
          Florida <Title2>Car</Title2>
        </Title>

        <TabHeaders>
          <TabHeader
            active={index === 0}
            onClick={setCurrentIndex.bind(null, 0)}
          >
            <FormattedMessage id="home.new_cars" />
          </TabHeader>
          <TabHeader
            active={index === 1}
            onClick={setCurrentIndex.bind(null, 1)}
          >
            <FormattedMessage id="home.used_cars" />
          </TabHeader>
          <TabHeader
            active={index === 2}
            onClick={setCurrentIndex.bind(null, 2)}
          >
            <FormattedMessage id="home.search_inventory" />
          </TabHeader>
        </TabHeaders>
      </Top>

      <TransitionGroup>
        <CSSTransition
          classNames="fade"
          timeout={1000}
          exit={false}
          key={index}
          unmountOnExit
        >
          <Tab>
            {index === 0 ? (
              <HomeCars condition="New" />
            ) : index === 1 ? (
              <HomeCars condition="Used" />
            ) : (
              <SearchInventory />
            )}
          </Tab>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default HomeTabs;
