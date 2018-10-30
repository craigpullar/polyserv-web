import React, { Component } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core";
import Intro from "./containers/intro";
import Footer from "./containers/footer";
import AddInterest from "./containers/add-interest";
import Header from "./containers/header";
import styles from "./styles";

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <div className={this.props.classes.contentContainer}>
            <Header />
            <Intro />
            <AddInterest />
            <Footer />
          </div>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
