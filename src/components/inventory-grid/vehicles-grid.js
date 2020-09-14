import React from "react";
import { FormattedMessage } from "react-intl";

import {
  Container,
  Image,
  StyledLink,
  SpaceBetween,
  Title,
  Shape,
  Price,
  Inline,
  Icon,
  Feature,
} from "./styles";
import { features } from "./data";

const VehiclesGrid = ({ vehicle }) => {
  return (
    <Container>
      <StyledLink to={`/inventory/${vehicle.slug}`}>
        <Image
          src={vehicle.gallery[0].url}
          alt={vehicle.gallery[0].alternativeText}
          caption={vehicle.gallery[0].caption}
        />

        <SpaceBetween>
          <Title>{vehicle.title}</Title>
          <Shape>
            <Price>${vehicle.price}</Price>
          </Shape>
        </SpaceBetween>

        {features.map(({ feature, icon }) => (
          <Inline key={feature}>
            <Feature>
              <FormattedMessage
                id={`values.${feature}.${vehicle[feature]}`}
                defaultMessage={vehicle[feature].toString()}
              />
            </Feature>
            <Icon className={icon + " fa-fw"} />
          </Inline>
        ))}
      </StyledLink>
    </Container>
  );
};

export default VehiclesGrid;
