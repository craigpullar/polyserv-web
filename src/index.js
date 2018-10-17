import React from "react";
import ReactDom from "react-dom";
import "babel-polyfill";
import App from "./app";
import { DatabaseProvider, initDatabase } from "./libs/db";

ReactDom.render(
  <DatabaseProvider.Provider value={initDatabase()}>
    <App />
  </DatabaseProvider.Provider>,
  document.getElementById("app")
);

module.hot.accept();
