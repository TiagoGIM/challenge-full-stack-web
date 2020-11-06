import axios from 'axios';
const endPointAPI = process.env.VUE_APP_API_END_POINT;

export default axios.create({
    baseURL: endPointAPI,
    headers: {
      "Content-type": "application/json"
    }
  });