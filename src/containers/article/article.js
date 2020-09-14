import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useIntl } from "react-intl";
import { useLazyQuery } from "@apollo/client";
import Markdown from "markdown-to-jsx";
import moment from "moment";

import GET_ARTICLE from "../../queries/article/article";

import Breadcrumbs from "../../components/breadcrumbs";
import H1 from "../../components/markdown/h1";
import H2 from "../../components/markdown/h2";
import H3 from "../../components/markdown/h3";
import Paragraph from "../../components/markdown/p";
import ListItem from "../../components/markdown/li";
import UList from "../../components/markdown/ul";
import BlockQuote from "../../components/markdown/blockquote";
import { Container, Banner, Title, Main, Content, Date, Icon } from "./styles";

const Article = () => {
  const { locale } = useIntl();
  const { slug } = useParams();
  const [getArticle, { loading, data }] = useLazyQuery(GET_ARTICLE);

  useEffect(() => {
    getArticle({ variables: { slug } });
  }, []);

  useEffect(() => {
    if (data && data.articles[0]) {
      document.title = data.articles[0].title + " - Florida Car";
    }
  }, [data]);

  if (!data || !data.articles[0]) return null;

  return (
    <Container>
      <Banner src={data.articles[0].image.url}>
        <Title>{data.articles[0].title}</Title>
        <Date>
          <Icon className="fas fa-calendar-alt" />
          {moment(data.articles[0].published_at)
            .locale(locale)
            .format("MMMM Do, YYYY")}
        </Date>
      </Banner>

      <Main>
        <Breadcrumbs title={data.articles[0].title} />

        <Content>
          <Markdown
            options={{
              overrides: {
                p: { component: Paragraph },
                h1: { component: H1 },
                h2: { component: H2 },
                h3: { component: H3 },
                li: { component: ListItem },
                ul: { component: UList },
                blockquote: { component: BlockQuote },
              },
            }}
          >
            {data.articles[0].content}
          </Markdown>
        </Content>
      </Main>
    </Container>
  );
};

export default Article;
