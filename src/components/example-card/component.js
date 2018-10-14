import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";

class Example extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <Card className={this.props.classes.card}>
        <h1 className={this.props.classes.title}>EXAMPLE COMPONENT</h1>
      </Card>
    );
  }
}

export default Example;
