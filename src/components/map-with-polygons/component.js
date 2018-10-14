import React, { Component } from "react";
import L from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";
import { OSM_TILE_SERVER } from "../../constants/maps";
import { objectIsEmpty } from "../../../core/utilities/misc";

class MapWithPolygons extends Component {
  map = null;
  layers = {};
  selectedPolygonLayer = null;

  state = {
    parentHasMapData: false
  };

  componentDidMount() {
    const {
      defaultCenter,
      defaultZoom,
      mapId,
      polygonLayers,
      defaultBounds
    } = this.props;
    this.map = L.map(mapId, {
      center: [defaultCenter.lat, defaultCenter.lng],
      zoom: defaultZoom,
      layers: [
        L.tileLayer(OSM_TILE_SERVER, {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken: process.env.MAPBOX_ACCESS_TOKEN
        })
      ]
    }).on("zoomend", () => {
      this.setLayersBasedOnZoom();
    });

    if (defaultBounds) {
      this.map.fitBounds(defaultBounds);
    }

    const polygonsPane = this.map.createPane("polygons");
    polygonsPane.style.zIndex = 500;
    const selectedPolygonsPane = this.map.createPane("selectedPolygons");
    selectedPolygonsPane.style.zIndex = 450;

    Object.keys(polygonLayers).forEach(key => {
      this.renderPolygonLayer(key);
    });

    if (this.props.autoFitBounds && !objectIsEmpty(this.layers)) {
      this.autoFitBounds();
    }

    this.setLayersBasedOnZoom();

    if (this.props.sendMapDataToParent && !this.state.parentHasMapData) {
      this.props.sendMapDataToParent(this.map);
      this.setState({ parentHasMapData: true });
    }

    this.renderSelectedPolygonLayer();
  }

  componentDidUpdate(prevProps) {
    this.renderSelectedPolygonLayer();
    if (this.props.form) {
      const { setFieldsValue, getFieldValue } = this.props.form;
      const formFieldValue = getFieldValue(this.props.formFieldName);
      if (formFieldValue) {
        if (
          Object.keys(this.props.selectedPolygons).length !==
          Object.keys(formFieldValue).length
        ) {
          setFieldsValue({
            [this.props.formFieldName]: this.props.selectedPolygons
          });
        }
      }
    }
    if (this.props.polygonLayers !== prevProps.polygonLayers) {
      Object.keys(this.props.polygonLayers).forEach(key => {
        this.renderPolygonLayer(key);
      });
      if (this.props.autoFitBounds && !objectIsEmpty(this.layers)) {
        this.autoFitBounds();
      }
      this.setLayersBasedOnZoom();
      this.props.sendMapDataToParent &&
        this.props.sendMapDataToParent(this.map);
    }
  }
  @bound
  autoFitBounds() {
    let bounds;
    Object.keys(this.layers).forEach(key => {
      if (!bounds) {
        bounds = this.layers[key].getBounds();
      } else {
        const layerBounds = this.layers[key].getBounds();
        bounds.extend(layerBounds.getNorthEast(), layerBounds.getSouthWest());
      }
    });
    this.map.fitBounds(bounds);
  }

  renderSelectedPolygonLayer() {
    const { polygonLayers, selectedPolygons } = this.props;
    const selectedPolygonIds = Object.keys(selectedPolygons);

    let polygonsToDraw = [];
    Object.keys(polygonLayers).forEach(key => {
      polygonLayers[key].features.forEach(p => {
        if (selectedPolygonIds.includes(p.properties["polygonId"])) {
          polygonsToDraw.push(p);
        }
      });
    });

    if (this.selectedPolygonLayer) this.selectedPolygonLayer.clearLayers();
    this.selectedPolygonLayer = L.geoJSON(polygonsToDraw, {
      pane: "selectedPolygons",
      className: "map-polygon-selected"
    }).addTo(this.map);
    const bounds = this.selectedPolygonLayer.getBounds();
    if (!objectIsEmpty(bounds) && this.props.setBoundsFromSelected) {
      this.map.fitBounds(this.selectedPolygonLayer.getBounds());
    }
  }

  renderPolygonLayer(layerName) {
    const { polygonLayers, onPolygonClick } = this.props;

    if (this.layers[layerName]) this.layers[layerName].clearLayers();

    this.layers[layerName] = L.geoJSON(polygonLayers[layerName], {
      pane: "polygons",
      className: "map-polygon"
    }).addTo(this.map);
    if (onPolygonClick) {
      this.layers[layerName].on("click", e => {
        onPolygonClick(e);
      });
    }

    this.layers[layerName].minZoom = polygonLayers[layerName].minZoom;
    this.layers[layerName].maxZoom = polygonLayers[layerName].maxZoom;
  }

  setLayersBasedOnZoom() {
    const zoom = this.map.getZoom();
    const layers = this.layers;
    Object.keys(layers).forEach(key => {
      if (this.map.hasLayer(layers[key])) {
        if (zoom >= layers[key].minZoom && zoom <= layers[key].maxZoom) {
          layers[key].setStyle({ opacity: 1 });
        } else {
          layers[key].setStyle({ opacity: 0 });
        }
      }
    });
  }

  render() {
    const { mapId } = this.props;
    return <div id={`${mapId}`} className="map" />;
  }
}

MapWithPolygons.propTypes = {
  mapId: PropTypes.string.isRequired,
  defaultCenter: PropTypes.object,
  defaultZoom: PropTypes.number,
  polygonLayers: PropTypes.object,
  selectedPolygons: PropTypes.object,
  onPolygonClick: PropTypes.func,
  form: PropTypes.any,
  setBoundsFromSelected: PropTypes.bool,
  autoFitBounds: PropTypes.bool,
  formFieldName: PropTypes.string,
  defaultBounds: PropTypes.array,
  sendMapDataToParent: PropTypes.func
};

export default MapWithPolygons;
