import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import { Container } from "./styles";

const VehicleLocation = ({ vehicle }) => {
  const [center] = useState({ lat: 59.95, lng: 30.33 });
  const [zoom] = useState(11);

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </Container>
  );
};

export default VehicleLocation;
