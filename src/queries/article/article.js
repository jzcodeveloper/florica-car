import gql from "graphql-tag";

const GET_ARTICLE = gql`
  query Articles($slug: String!) {
    articles(where: { slug: $slug }) {
      id
      title
      slug
      content
      published_at
      image {
        url
        alternativeText
        caption
      }
    }
  }
`;

export default GET_ARTICLE;
