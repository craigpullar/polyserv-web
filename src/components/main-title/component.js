import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

class MainTitle extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired
  };

  render() {
    return (
      <Typography variant="h1" className={this.props.classes.mainTitle}>
        {this.props.children}
      </Typography>
    );
  }
}

export default MainTitle;
