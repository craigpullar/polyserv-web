import React, { Component } from "react";
import { getPolygons } from "../../api/polygons";
import PolygonMap from "../../components/polygon-map";

class DemoPolygonMap extends Component {
  state = { geojson: {} };

  componentWillMount() {
    this.setPolygonsByBounds({ bounds: "13,56,-87,-94" });
  }

  setPolygonsByBounds({ bounds }) {
    getPolygons({ bounds }).then(response => {
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

  //TO-DO use class-bind, need to change babel to allow decorators
  handleMoveEnd = this.handleMoveEnd.bind(this);
  handleMoveEnd(event) {
    const bounds = event.getBounds();
    const boundsArray = `${bounds.getSouth()},${bounds.getNorth()},${bounds.getWest()},${bounds.getEast()}`;
    this.setPolygonsByBounds({ bounds: boundsArray });
  }

  render() {
    return (
      <PolygonMap
        geojsonData={this.state.geojson}
        onPolygonClick={this.handlePolygonClick}
        onMoveEnd={this.handleMoveEnd}
      />
    );
  }
}

export default DemoPolygonMap;
