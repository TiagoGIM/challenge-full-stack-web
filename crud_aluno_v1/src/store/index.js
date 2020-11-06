import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deleteStudent : {      
        student :{
          id: null,
          name : null,
          cpf: null,
          ra:null,
          email:null,
        },
        deleteAction : false
      }
  },

  mutations: {
    deleteStudent(state,data) {
      state.deleteStudent = data;
    },
    //reset state
    deleteAbort(state){
      state.deleteStudent = {      
        student :{
          id: '',
          name : '',
          cpf: '',
          ra:'',
          email:'',
        },
        deleteAction : false
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
