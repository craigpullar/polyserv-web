import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

class Footer extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <footer className={this.props.classes.container}>
        <Typography>&#169; PolyServ 2019</Typography>
      </footer>
    );
  }
}

export default Footer;
