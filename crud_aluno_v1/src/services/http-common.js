import axios from 'axios';
<<<<<<< HEAD
const endPointAPI = process.env.VUE_APP_API_END_POINT;

=======
const endPointAPI = process.env.VUE_APP_API_END_POINT ;
>>>>>>> develop


export default axios.create({
    baseURL: endPointAPI,
    headers: {
      "Content-type": "application/json"
    }
  });