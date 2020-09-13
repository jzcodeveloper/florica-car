import gql from "graphql-tag";

const GET_VEHICLE = gql`
  query Vehicle($slug: String!) {
    vehicles(where: { slug: $slug }) {
      id
      title
      slug
      condition
      price
      year
      mileage
      make
      model
      body
      transmission
      fuel_type
      vin
      interior_color
      exterior_color
      interior_features
      exterior_features
      safety_features
      extra_features
      vender_address
      vender_phone
      vender_email
      description
      gallery {
        id
        url
        alternativeText
        caption
      }
    }
  }
`;

export default GET_VEHICLE;
