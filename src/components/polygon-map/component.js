import React, { Component } from "react";
import ReactMapboxGl, { GeoJSONLayer, Feature } from "react-mapbox-gl";
import { getPolygons } from "../../api/polygons";

import { POLYGON_STYLES } from "./styles";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicG9seXNlcnYiLCJhIjoiY2puaWFjaWk0MG1rZDNxcGNpbXlpNHdvZSJ9._TdURRzc8nZw7Id3FtVO2g"
});

const TORONTO_LATLNG = [-79.384293, 43.653908];

class PolygonMap extends Component {
  state = { geojson: {} };
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
    console.log(this.state.geojson);
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={TORONTO_LATLNG}
        containerStyle={{
          height: "90vh",
          width: "90vw"
        }}
      >
        <GeoJSONLayer data={this.state.geojson} {...POLYGON_STYLES} />
      </Map>
    );
  }
}

export default PolygonMap;
