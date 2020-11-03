import http from './http-common';

class DataService {
    getAll() {
      return http.get("/student");
    }
  
    getById(id) {
      return http.get(`/student/${id}`);
    }
  
    create(data) {
      return http.post("/student", data);
    }
  
    update(id, data) {
      return http.put(`/student/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/student/${id}`);
    }
    
    findById(id) {
      return http.get(`/student?id=${id}`);
    }
  }
  
  export default new DataService();