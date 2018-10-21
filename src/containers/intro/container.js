import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import CardContainer from "../../components/card-container";
import MainTitle from "../../components/main-title";
import SubTitle from "../../components/sub-title";
import PolygonMap from "../../components/polygon-map";

class Intro extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <PolygonMap/>
    );
  }
}

export default Intro;
