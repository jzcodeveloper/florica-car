import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useLazyQuery } from "@apollo/client";

import GET_VEHICLES from "../../queries/vehicle/vehicles";

import Grid from "../inventory-grid";
import { Container, Grids, StyledLink } from "./styles";

const HomeCars = ({ condition }) => {
  const [vehicles, setVehicles] = useState([]);
  const [getVehicles, { loading, data }] = useLazyQuery(GET_VEHICLES);

  useEffect(() => {
    getVehicles({ variables: { params: { condition }, limit: 8 } });
  }, []);

  useEffect(() => {
    if (data) {
      setVehicles(data.vehicles);
    }
  }, [data]);

  return (
    <Container>
      <Grids>
        {vehicles.map((vehicle) => (
          <Grid key={vehicle.id} vehicle={vehicle} />
        ))}
      </Grids>
      <StyledLink to={`/inventory?condition=${condition}`}>
        <FormattedMessage id="home.show_all" />
      </StyledLink>
    </Container>
  );
};

export default HomeCars;
