import React from "react";
import { FormattedMessage } from "react-intl";

import { Container, Shape, Feature, Name, Value } from "./styles";
import { features } from "./data";

const VehicleFeatures = ({ vehicle }) => {
  return (
    <Container>
      {features.map((feature) => {
        if (!vehicle[feature]) return null;

        return (
          <Shape key={feature}>
            <Feature>
              <Name>
                <FormattedMessage id={`feature.${feature}`} />
              </Name>
              <Value>
                <FormattedMessage
                  id={`values.${feature}.${vehicle[feature]}`}
                  defaultMessage={vehicle[feature].toString()}
                />
              </Value>
            </Feature>
          </Shape>
        );
      })}
    </Container>
  );
};

export default VehicleFeatures;
