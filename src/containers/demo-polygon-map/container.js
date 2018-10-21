import React, { Component } from "react";

import { getPolygons } from "../../api/polygons";
import PolygonMap from "../../components/polygon-map";

class DemoPolygonMap extends Component {
  componentWillMount() {
    getPolygons({ bounds: "13,56,-87,-94" }).then(response => {
      const geojson = {
        type: "FeatureCollection",
        features: response.data
      };
      this.setState({ geojson });
    });
  }

  render() {
    return <PolygonMap />;
  }
}

export default DemoPolygonMap;
