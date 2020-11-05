<template>
  <v-row
    align="center"
    justify="space-around"
    outlined
  >
  <v-tooltip 
  left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        tile
        color="error"
        v-bind="attrs"
        v-on="on"
        @click="deleteEvent"
      >
        <v-icon>mdi-account-remove</v-icon>
      </v-btn>
    </template>
    <span >Remover do registro</span>
  </v-tooltip>
  </v-row>
</template>

<script>

import store from '@/store'

export default{
  name:'BtnDelete',
  props:
  { 
    student: Object,
  },  
  componentes: {
//    SucessOperation,
  },
  methods:{
    deleteEvent(){
      const forDelete = {      
        student : this.student,
        deleteAction : true,
      }
      //trigger a event in the store three
      store.commit('deleteStudent',forDelete);
    }
  }
}

</script>

