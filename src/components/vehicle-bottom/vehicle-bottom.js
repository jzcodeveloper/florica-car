import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import VehicleOverview from "../vehicle-overview";
import VehicleLocation from "../vehicle-location";
import VehicleContact from "../vehicle-contact";
import { Container, TabHeaders, TabHeader, Tab } from "./styles";

const VehicleBottom = ({ vehicle }) => {
  const [index, setIndex] = useState(0);

  const setCurrentIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <TabHeaders>
        <TabHeader active={index === 0} onClick={setCurrentIndex.bind(null, 0)}>
          <FormattedMessage id="vehicle.overview" />
        </TabHeader>
        <TabHeader active={index === 1} onClick={setCurrentIndex.bind(null, 1)}>
          <FormattedMessage id="vehicle.location" />
        </TabHeader>
        <TabHeader active={index === 2} onClick={setCurrentIndex.bind(null, 2)}>
          <FormattedMessage id="vehicle.contact" />
        </TabHeader>
      </TabHeaders>

      <TransitionGroup>
        <CSSTransition
          classNames="fade"
          timeout={1000}
          exit={false}
          key={index}
        >
          <Tab>
            {index === 0 ? (
              <VehicleOverview vehicle={vehicle} />
            ) : index === 1 ? (
              <VehicleLocation vehicle={vehicle} />
            ) : (
              <VehicleContact vehicle={vehicle} />
            )}
          </Tab>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default VehicleBottom;
