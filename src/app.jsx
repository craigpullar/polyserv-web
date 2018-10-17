import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "./containers/intro";
import AddInterest from "./containers/add-interest";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <Intro />
          <AddInterest />
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
