import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "./containers/intro";
import Footer from "./containers/footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <Intro />
          <Footer />
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
