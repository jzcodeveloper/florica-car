import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { FormattedMessage } from "react-intl";

import { Container, Features, Column, Heading, Icon, Item } from "./styles";

const VehicleOverview = ({ vehicle }) => {
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [safetyFeatures, setSafetyFeatures] = useState([]);
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [extraFeatures, setExtraFeatures] = useState([]);

  useEffect(() => {
    if (vehicle.interior_features)
      setInteriorFeatures(vehicle.interior_features.split(","));
    if (vehicle.safety_features)
      setSafetyFeatures(vehicle.safety_features.split(","));
    if (vehicle.exterior_features)
      setExteriorFeatures(vehicle.exterior_features.split(","));
    if (vehicle.extra_features)
      setExtraFeatures(vehicle.extra_features.split(","));
  }, []);

  return (
    <Container>
      <Markdown>{vehicle.description}</Markdown>
      <Features>
        {interiorFeatures[0] && (
          <Column>
            <Heading>
              <FormattedMessage id="feature.interior_features" />
            </Heading>
            {interiorFeatures.map((feature) => (
              <Item>
                <Icon className="fas fa-check-circle" />
                {feature}
              </Item>
            ))}
          </Column>
        )}
        {safetyFeatures[0] && (
          <Column>
            <Heading>
              <FormattedMessage id="feature.safety_features" />
            </Heading>
            {safetyFeatures.map((feature) => (
              <Item>
                <Icon className="fas fa-check-circle" />
                {feature}
              </Item>
            ))}
          </Column>
        )}
        {exteriorFeatures[0] && (
          <Column>
            <Heading>
              <FormattedMessage id="feature.exterior_features" />
            </Heading>
            {safetyFeatures.map((feature) => (
              <Item>
                <Icon className="fas fa-check-circle" />
                {feature}
              </Item>
            ))}
          </Column>
        )}
        {extraFeatures[0] && (
          <Column>
            <Heading>
              <FormattedMessage id="feature.extra_features" />
            </Heading>
            {extraFeatures.map((feature) => (
              <Item>
                <Icon className="fas fa-check-circle" />
                {feature}
              </Item>
            ))}
          </Column>
        )}
      </Features>
    </Container>
  );
};

export default VehicleOverview;
