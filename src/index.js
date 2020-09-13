import "./index.css";
import "moment/locale/es";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app";
import { Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHookProvider } from "@apollo/react-hooks";
import { history } from "./history";
import client from "./utils/apolloClient";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ApolloProvider client={client}>
        <ApolloHookProvider client={client}>
          <App />
        </ApolloHookProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
