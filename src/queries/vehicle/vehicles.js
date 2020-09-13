import gql from "graphql-tag";

const GET_VEHICLES = gql`
  query Vehicle($params: JSON, $start: Int, $limit: Int, $sort: String) {
    vehicles(where: $params, start: $start, limit: $limit, sort: $sort) {
      id
      title
      slug
      price
      year
      body
      mileage
      transmission
      fuel_type
      gallery {
        id
        url
        alternativeText
        caption
      }
    }
    vehiclesConnection(where: $params) {
      aggregate {
        count
      }
    }
  }
`;

export default GET_VEHICLES;
