import gql from "graphql-tag";

const GET_ARTICLES = gql`
  query Articles($start: Int, $limit: Int) {
    articles(start: $start, limit: $limit) {
      id
      title
      slug
      published_at
      image {
        url
        alternativeText
        caption
      }
    }
    articlesConnection {
      aggregate {
        count
      }
    }
  }
`;

export default GET_ARTICLES;
