import React, {Component} from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoicG9seXNlcnYiLCJhIjoiY2puaWFjaWk0MG1rZDNxcGNpbXlpNHdvZSJ9._TdURRzc8nZw7Id3FtVO2g"
  });

class PolygonMap extends Component {
    render(){
        return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "100vh",
              width: "100vw"
            }}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
              </Layer>
          </Map>
          )
    }
}

export default PolygonMap;
