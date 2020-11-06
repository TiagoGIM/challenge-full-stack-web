import axios from 'axios';
const endPointAPI = process.env.APP_URL_API;



export default axios.create({
    baseURL: endPointAPI,
    headers: {
      "Content-type": "application/json"
    }
  });