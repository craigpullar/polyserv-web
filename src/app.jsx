import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "./containers/intro";
import DemoMap from "./containers/demo-map";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline>
          <DemoMap />
        </CssBaseline>
      </>
    );
  }
}

export default App;
