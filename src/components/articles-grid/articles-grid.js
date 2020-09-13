import React from "react";
import moment from "moment";
import { useIntl, FormattedMessage } from "react-intl";

import {
  Container,
  Image,
  StyledLink,
  Flex,
  Column,
  Bottom,
  Title,
  Icon,
  Date,
} from "./styles";

const ArticlesGrid = ({ article }) => {
  const { locale } = useIntl();

  const url =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;

  return (
    <Container>
      <StyledLink to={`/blog/${article.slug}`}>
        <Image
          src={url}
          alt={article.image.alternativeText}
          caption={article.image.caption}
        />

        <Column>
          <Title>{article.title}</Title>
          <Flex>
            <Icon className="fas fa-calendar-alt" />
            <Date>
              {moment(article.published_at)
                .locale(locale)
                .format("MMM Do, YYYY")}
            </Date>
          </Flex>
        </Column>
      </StyledLink>
    </Container>
  );
};

export default ArticlesGrid;
