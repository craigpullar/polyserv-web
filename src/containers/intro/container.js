import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ExampleCard from "../../components/example-card";

class Intro extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.container}>
        <ExampleCard />
      </div>
    );
  }
}

export default Intro;
