import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useLazyQuery } from "@apollo/client";

import GET_ARTICLES from "../../queries/article/articles";

import Grid from "../articles-grid";
import {
  Container,
  Main,
  Bottom,
  BottomIcon,
  Prev,
  Pages,
  Page,
  Next,
} from "./styles";

const Articles = ({ params, onChange }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);
  const [pages, setPages] = useState(0);
  const [getArticles, { loading, data }] = useLazyQuery(GET_ARTICLES);

  useEffect(() => {
    const { limit = 12, page = 0 } = params;

    if (page !== undefined) setPage(page);
    if (limit !== undefined) setLimit(limit);

    getArticles({
      variables: { start: limit * page, limit },
    });
  }, [params]);

  useEffect(() => {
    if (data) {
      setArticles(data.articles);
      const count = data.articlesConnection.aggregate.count;
      const pages = Math.ceil(count / limit);
      setPages(pages);
    }
  }, [data]);

  console.log(articles);

  return (
    <Container>
      <Main>
        {articles.map((article) => (
          <Grid key={article.id} article={article} />
        ))}
      </Main>

      <Bottom>
        <Prev
          onClick={onChange.bind(null, "page", page - 1)}
          active={page === 0}
        >
          <BottomIcon className="fas fa-chevron-left" />
        </Prev>

        <Pages>
          {new Array(pages).fill(0).map((e, i) => (
            <Page
              key={i}
              onClick={onChange.bind(null, "page", i)}
              active={Number(page) === i}
            >
              {i + 1}
            </Page>
          ))}
        </Pages>

        <Next
          onClick={onChange.bind(null, "page", page + 1)}
          active={page === pages - 1}
        >
          <BottomIcon className="fas fa-chevron-right" />
        </Next>
      </Bottom>
    </Container>
  );
};

export default Articles;
