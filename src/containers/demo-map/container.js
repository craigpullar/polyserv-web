import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DemoMap extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <>This is the Polygon map that we're going to use - Sample Text here</>
    );
  }
}

export default DemoMap;
