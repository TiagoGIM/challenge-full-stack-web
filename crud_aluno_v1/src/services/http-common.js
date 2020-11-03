import axios from 'axios';
const endPointAPI = 'http://localhost:8084/';


export default axios.create({
    baseURL: endPointAPI,
    headers: {
      "Content-type": "application/json"
    }
  });