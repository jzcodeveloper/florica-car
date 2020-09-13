import React, { useEffect } from "react";
import { useIntl } from "react-intl";

import BackgroundSlider from "../../components/background-slider";
import Carousel from "../../components/carousel";
import HomeTabs from "../../components/home-tabs";
import HomeActions from "../../components/home-actions";
import HomeAbout from "../../components/home-about";
import { Container } from "./styles";

const Home = () => {
  const { locale, formatMessage } = useIntl();

  useEffect(() => {
    document.title = `Florida Car - ${formatMessage({ id: "app.title" })}`;
  }, [locale]);

  return (
    <Container>
      <BackgroundSlider />
      <HomeTabs />
      <HomeActions />
      <HomeAbout />
    </Container>
  );
};

export default Home;
