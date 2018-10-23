import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getPolygons = ({ bounds, limit = 50 }) =>
  axios.get(`${API_URL}/polygons/region`, {
    params: {
      bounds,
      limit
    }
  });
