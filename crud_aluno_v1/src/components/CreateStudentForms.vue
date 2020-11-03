<template>
<div>
  <v-alert
  type ='success'
  v-if='success'
  dismissible
  >Cadastro realizado !
  </v-alert>
  <v-alert
  type ='error'
  v-if='error'
  dismissible
  >Dados inválidos : {{mensageError}}
  </v-alert>

  <v-form
    ref="form"
    v-model="valid"

  >
    <v-text-field
      v-model="newStudent.name"
      :counter="15"
      :rules="nameRules"
      label="Nome completo"
      outlined
      required
    ></v-text-field>

    <v-text-field
      v-model="newStudent.ra"
      :counter="10"
      :rules="raRules"
      label="RA"
      :readonly="newStudent.id !== null"
      placeholder="Informe o registro acadêmico"
      outlined
    ></v-text-field>

    <v-text-field
      v-model="newStudent.cpf"
      :counter="9"
      :rules="cpfRules"
      label="CPF"
      :readonly="newStudent.id !== null"
      placeholder="Informe o número do CPF"
      outlined
      required
    ></v-text-field>

    <v-text-field
      v-model="newStudent.email"
      :rules="emailRules"
      label="E-mail"
      placeholder="example@email.com"
      outlined
      required
    ></v-text-field>


  <v-card
   class="d-flex flex-row-reverse"
   flat
   >
    <v-btn
      class="mr-6"
      color="red lighten-5"      
      fab
      large
      @click="reset"
    >
      <v-icon>mdi-undo-variant</v-icon> 
    </v-btn>
    <v-btn
    
      fab
      dark
      large
      color="red lighten-1"
      outlined
      @click="resetValidation"
    >
      <v-icon>mdi-close</v-icon>      
    </v-btn>
    <v-btn
      :disabled="!valid"
      fab
      color="success"
      large
      class="mr-6"
      @click="createStudent"
    >
      <v-icon 
      color = "deep-green lighten-5"
      >mdi-content-save</v-icon>
    </v-btn>
  </v-card>
  </v-form>
</div>
</template>

<script>
import DataService from '@/services/DataService.js';
//import SucessOperation from './dialogs/SucessOperation.vue';

export default {
  name: 'CreateStudentForms',

  props:
  { 
    student: Object,
    type: String,
    readonly: Boolean
  },
  
  componentes: {
//    SucessOperation,
  },
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    cpf:'',
    cpfRules:[
      v => !!v || 'CPF is required',
      v => (v && v.length >= 9) || 'CPF must be less than 9 characters',
    ],
    ra:'',
    raRules:[
      v => !!v || 'RA is required',
      v => (v && v.length >= 9) || 'RA must be less than 9 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    newStudent : {
          id: null,
          name : null,
          cpf: null,
          ra:null,
          email:null,
        },
    success : false,
    error : false,
    mensageError:"",
  }),

  methods: {
    createStudent () {      
      //this.$refs.form.validate()

  
        DataService.create(this.newStudent).then(res => {
          console.log(res.data);
          this.success=true;
        })
        .catch(err => {
          this.error =true;
          //create a handler with an approach for de error.
          
          let errorsRequest = err.response.data.errors;
          console.log(errorsRequest);
          let arrayError = [''];
          arrayError.push(Object.values(errorsRequest))

          this.mensageError = arrayError.reduce((current, next, idx) => {
            return idx == 0 ? current : next + ', ' + current;
          },'');
          console.log(this.mensageError)
        });

        this.$refs.form.reset()    

    },
    reset () {
      this.$refs.form.reset()
      this.$router.push("/");

    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>