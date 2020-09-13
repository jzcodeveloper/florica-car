import React from "react";
import { FormattedMessage } from "react-intl";

import {
  Container,
  Images,
  Image,
  StyledLink,
  Details,
  SpaceBetween,
  Title,
  AbsoluteShape,
  Shape,
  Label,
  Price,
  Flex,
  Detail,
  Icon,
  Feature,
  Name,
  Value,
} from "./styles";
import { features } from "./data";

const VehiclesList = ({ vehicle }) => {
  const url =
    process.env.NODE_ENV !== "development"
      ? vehicle.gallery[0].url
      : process.env.REACT_APP_BACKEND_URL + vehicle.gallery[0].url;

  return (
    <Container>
      <Images>
        <StyledLink to={`/inventory/${vehicle.slug}`}>
          <Image
            src={url}
            alt={vehicle.gallery[0].alternativeText}
            caption={vehicle.gallery[0].caption}
          />
        </StyledLink>
        <AbsoluteShape>
          <Label>
            Our
            <br />
            Price
          </Label>
          <Price>${vehicle.price}</Price>
        </AbsoluteShape>
      </Images>

      <Details>
        <SpaceBetween>
          <StyledLink to={`/inventory/${vehicle.slug}`}>
            <Title>{vehicle.title}</Title>
          </StyledLink>
          <Shape>
            <Label>
              Our
              <br />
              Price
            </Label>
            <Price>${vehicle.price}</Price>
          </Shape>
        </SpaceBetween>

        <Flex>
          {features.map(({ feature, icon }) => (
            <Detail key={feature}>
              <Icon className={icon + " fa-fw"} />
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
            </Detail>
          ))}
        </Flex>
      </Details>
    </Container>
  );
};

export default VehiclesList;
