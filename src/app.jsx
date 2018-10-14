import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Intro from "./containers/intro";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline>
        <Intro />
      </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
