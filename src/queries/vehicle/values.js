import gql from "graphql-tag";

const GET_VALUES = (key) => gql`
  query Vehicle {
    vehiclesConnection {
      groupBy {
        ${key} {
          key
        }
      }
    }
  }
`;

export default GET_VALUES;
