<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          SUCESSO
        </v-card-title>
        <v-card-text>Aluno cadastrado com sucesso. Clique em "Continuar" para voltar a tela inicial</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="continueRoutine()"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      
    name : "SucessOperation",
    props :{dialogS:Boolean},
    data () {
      return {
        dialog: this.dialogS,
      }
    },
    methods : {
        continueRoutine(){
            this.dialog=false;
            this.$router.push("/");            
        }
    }
  }
</script>