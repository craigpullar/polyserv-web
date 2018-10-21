import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getPolygons = ({ bounds }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/polygons/region`, {
        params: {
          bounds
        }
      })
      .then(resolve)
      .catch(reject);
  });
};
