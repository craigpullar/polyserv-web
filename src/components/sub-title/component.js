import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

class SubTitle extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired
  };

  render() {
    return (
      <Typography variant="h5" className={this.props.classes.subTitle}>
        {this.props.children}
      </Typography>
    );
  }
}

export default SubTitle;
