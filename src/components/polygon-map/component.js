import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMapboxGl, { GeoJSONLayer, Feature } from "react-mapbox-gl";

import { getPolygons } from "../../api/polygons";
import { POLYGON_STYLES } from "./styles";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicG9seXNlcnYiLCJhIjoiY2puaWFjaWk0MG1rZDNxcGNpbXlpNHdvZSJ9._TdURRzc8nZw7Id3FtVO2g"
});

const TORONTO_LATLNG = [-79.384293, 43.653908];

class PolygonMap extends Component {
  static propTypes = {
    geojsonData: PropTypes.object,
    center: PropTypes.array,
    onPolygonClick: PropTypes.func
  };

  static defaultProps = {
    geojsonData: {},
    center: TORONTO_LATLNG,
    onPolygonClick: () => {}
  };
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
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={this.props.center || TORONTO_LATLNG}
        containerStyle={{
          height: "90vh",
          width: "90vw"
        }}
      >
        <GeoJSONLayer
          {...POLYGON_STYLES}
          data={this.state.geojson}
          fillOnClick={this.props.onPolygonClick}
        />
      </Map>
    );
  }
}

export default PolygonMap;
