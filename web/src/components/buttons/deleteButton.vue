<template>
  <v-row
    align="center"
    justify="space-around"
  >
  <v-tooltip 
  left
  >
    <template v-slot:activator="{ attrs }">
      <v-btn
        outlined
        tile
        color="deep-purple"
        v-bind="attrs"
        v-on="{click:deleteEvent}"
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
  name:'deleteBtn',
  data(){
    return {
      del:false
    }
  },
  props:
  { 
    student: Object,
  },  
  componentes: {
//    SucessOperation,
  },
  methods:{
    deleteEvent(){

      this.del = true;
      const forDelete = {      
        student : this.student,
        deleteAction : this.del,
      }
      //trigger a event in the store three
      store.commit('deleteStudent',forDelete);
      //this event allow unit test about props
      //this.$emit('deleteStudent',{...this.student});
    }
  }
}

</script>

