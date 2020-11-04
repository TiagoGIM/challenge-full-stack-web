<template>
  <v-row justify="center">
    <v-dialog width="600"  v-model="hidded">
      <v-card width="600">
          <v-card-text>
            <h2>Deseja excluir o Aluno: </h2>
            <h3>Nome: {{student.name}} </h3>
            <h2> e as informações : </h2>
            <h4> Email : {{student.email}} </h4>
            <h4> CPF : {{student.cpf}} </h4>
            <h4>Registro Acadêmico: {{student.ra}} </h4>
            <h2>Do sistema </h2>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="abort">CANCELAR</v-btn>
              <v-btn @click="removeStudent">DELETAR</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DataService from '@/services/DataService.js';
import store from '@/store'

export default{
  name:'PopUpDelete',
  props:
  { 
    student: Object,
    hidded: Boolean = false,
  },  
  componentes: {
//    SucessOperation,
  },
  data(){
    return {
      
    }
  },
  methods:{
    deleteEvent(){

    }
  }  
}
</script>
