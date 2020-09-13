import React from "react";
import { useIntl, FormattedMessage } from "react-intl";

import { Container, Label, Subtitle } from "./styles";

const VehiclePrice = ({ vehicle }) => {
  const { locale } = useIntl();

  return (
    <Container>
      <Label>
        <FormattedMessage id="feature.price" />
      </Label>

      <Subtitle>
        {new Intl.NumberFormat(locale, {
          style: "currency",
          currency: "USD",
        }).format(vehicle.price)}
      </Subtitle>
    </Container>
  );
};

export default VehiclePrice;
