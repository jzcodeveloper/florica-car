import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useLazyQuery } from "@apollo/client";
import Carousel from "../../components/carousel";
import Breadcrumbs from "../../components/breadcrumbs";
import VehiclePrice from "../../components/vehicle-price";
import VehicleFeatures from "../../components/vehicle-features";
import VehicleBottom from "../../components/vehicle-bottom";

import GET_VEHICLE from "../../queries/vehicle/vehicle";

import { Container, Main, Left, Right, Title } from "./styles";

const Vehicle = () => {
  const { slug } = useParams();
  const [getVehicle, { loading, data }] = useLazyQuery(GET_VEHICLE);

  useEffect(() => {
    getVehicle({ variables: { slug } });
  }, []);

  useEffect(() => {
    if (data && data.vehicles[0]) {
      document.title = data.vehicles[0].title + " - Florida Car";
    }
  }, [data]);

  if (!data || !data.vehicles[0]) return null;

  return (
    <Container>
      <Breadcrumbs title={data.vehicles[0].title} />
      <Main>
        <Left>
          <Title>{data.vehicles[0].title}</Title>
          <Carousel images={data.vehicles[0].gallery} />
          <VehicleBottom vehicle={data.vehicles[0]} />
        </Left>

        <Right>
          <VehiclePrice vehicle={data.vehicles[0]} />
          <VehicleFeatures vehicle={data.vehicles[0]} />
        </Right>
      </Main>
    </Container>
  );
};

export default Vehicle;
