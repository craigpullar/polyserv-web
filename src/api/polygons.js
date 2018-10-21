import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getPolygons = ({ bounds, limit = 50 }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/polygons/region`, {
        params: {
          bounds,
          limit
        }
      })
      .then(resolve)
      .catch(reject);
  });
};
