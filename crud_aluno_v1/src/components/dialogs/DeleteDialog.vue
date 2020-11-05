<template>
  <v-dialog
  max-width=400
  min-width=200
  v-model="hidded"
  persistent
  >
  <v-card>
    <v-card justify="center">
      <v-card-title class="justify-center">
        Confirme exclusão do aluno
        </v-card-title>
        <v-card-text > 
          <h3>Nome: {{student.name}} </h3>
          <h4> Email : {{student.email}} </h4>
          <h4> CPF : {{student.cpf}} </h4>
          <h4>Registro Acadêmico: {{student.ra}} </h4>
      </v-card-text>
    </v-card>       

        <v-card-actions class="justify-center  ">
            <v-btn
            @click="hide"
            outlined
            color="teal darken-4"
            style="border-radius:0"
            >
              <v-icon>mdi-arrow-left</v-icon>
              Voltar
            </v-btn>
            <v-btn @click="btnClickHandler"
            outlined
            class="my-btn-delete"
            >
              <v-icon>mdi-delete</v-icon>
              confirmar
            </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  
</template>

<script>

export default{
  name:'deleteDialog',
  props: { 
    student:{
      type :Object
    },
    hidded: {
      type : Boolean,
      default : false,
    },
    btnClickHandler : {
      type : Function,
    },
    
  },
  methods : {
    hide () {
      this.$emit("deleteDialog-hide-event")
    }
  },
}
</script>

<style scoped>
.my-btn-delete{
  margin-left:10px;
  color:#FF5722;
  border-radius:0
}
</style>