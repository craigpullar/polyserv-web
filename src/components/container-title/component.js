import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

class ContainerTitle extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <Typography
        variant="h2"
        gutterBottom
        className={this.props.classes.containerTitle}
      >
        {this.props.children}
      </Typography>
    );
  }
}

export default ContainerTitle;
