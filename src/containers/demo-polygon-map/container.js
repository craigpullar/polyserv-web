import React, { Component } from "react";

import { getPolygons } from "../../api/polygons";
import PolygonMap from "../../components/polygon-map";

class DemoPolygonMap extends Component {
  state = { geojson: {} };
  componentWillMount() {
    getPolygons({ bounds: "56,13,-87,-94" }).then(response => {
      const geojson = {
        type: "FeatureCollection",
        features: response.data
      };
      this.setState({ geojson });
    });
  }

  handlePolygonClick(event) {
    console.log(event);
  }

  render() {
    return (
      <PolygonMap
        geojsonData={this.state.geojson}
        onPolygonClick={this.handlePolygonClick}
      />
    );
  }
}

export default DemoPolygonMap;
