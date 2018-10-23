import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "./containers/intro";
import DemoPolygonMap from "./containers/demo-polygon-map";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          {/* <Intro /> */}
          <DemoPolygonMap />
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
