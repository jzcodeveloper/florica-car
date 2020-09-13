import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { messages } from "../../translations";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Home from "../home";
import Inventory from "../inventory";
import Blog from "../blog";
import Article from "../article";
import Vehicle from "../vehicle";
import About from "../about";
import Contact from "../contact";
import NotFound from "../not-found";

const App = () => {
  const [locale, setLocale] = useState(localStorage.getItem("lang") || "en");

  const localeHandler = () => {
    if (locale === "en") {
      setLocale("es");
      localStorage.setItem("lang", "es");
    } else {
      setLocale("en");
      localStorage.setItem("lang", "en");
    }
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Header locale={locale} changeLocale={localeHandler} />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/inventory/:slug" component={Vehicle} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:slug" component={Article} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </IntlProvider>
  );
};

export default App;
