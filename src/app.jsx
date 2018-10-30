import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "./containers/intro";
import Footer from "./containers/footer";
import AddInterest from "./containers/add-interest";
import Header from "./containers/header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <Header />
          <Intro />
          <AddInterest />
          <Footer />
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
