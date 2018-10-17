import React from "react";
import ReactDom from "react-dom";
import "babel-polyfill";
import App from "./app";
import Database, { DatabaseProvider } from "./libs/database";

ReactDom.render(
  <DatabaseProvider.Provider value={Database()}>
    <App />
  </DatabaseProvider.Provider>,
  document.getElementById("app")
);

module.hot.accept();
