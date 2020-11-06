<template>
<div>
  
  <v-alert
    type ='success'
    color='purple'
    v-if='success'
    dismissible
  >Cadastro realizado !
  </v-alert>
  <v-alert
  color='pink accent-4'
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
      v-mask="('XXXX-XXXX')"
      v-model="newStudent.ra"
      :rules="raRules"
      label="RA"
      :disabled="editMode"
      placeholder="Informe o registro acadêmico"
      outlined
    ></v-text-field>
   
    <v-text-field
      v-mask="('###.###.###-##')" 
      v-model="newStudent.cpf"
      :rules="cpfRules"
      label="CPF"
      :disabled="editMode"
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
      :disabled="!valid"
      fab
      color="indigo"
      large
      @click="saveStudent"
    >
      <v-icon 
      color = "indigo lighten-5"
      >mdi-content-save</v-icon>
    </v-btn>

    <v-btn
      class="mr-6"
      fab
      dark
      large
      color="purple accent-4"
      outlined
      @click="resetValidation"
    >
      <v-icon>mdi-close</v-icon>      
    </v-btn>
  
  </v-card>
  </v-form>
  <v-snackbar 
    v-model="successUpdate "
    :timeout="timeout"
    >
      PERFIL ATUALIZADO,Voltando para tela inicial    !
      
  </v-snackbar>
</div>
</template>

<script>
import DataService from '@/services/DataService.js';
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'CreateStudentForms',

  props:
  { 
    student: Object,
  },
  components:{
  //  'PulseLoader': PulseLoader
  },  
  data () {
    return {
      sizeLoader:"small",
      valid: false,
      nameRules: [
        v => !!v || 'Nome do aluno necessário', 
      ],
      cpfRules:[
        v => !!v || 'CPF é necessário',
        v => (v && v.length >= 14) || 'CPF precisa ter 9 dígitos ',
      ],
      raRules:[
        v => !!v || 'RA is required',
        v => (v && v.length >= 9) || 'Registro Acadêmico inválido',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido',
      ],
      newStudent : {
            id: null,
            name : null,
            cpf: null,
            ra:null,
            email:null,
          },
      timeout:4000,
      success : false,
      error : false,
      mensageError:"",
      successUpdate:false,
    }
  },
  computed : {
    editMode() {
      return this.student != null;
    },
  },
  async created(){
//prepear student for editing operation.
    if (this.student) {
      this.newStudent = this.student;
    }
  },

  methods: {
    saveStudent(){
      this.editMode ? this.updateStudent() : this.createStudent();
    },
    createStudent () {      
      //this.$refs.form.validate()  
        DataService.create(this.newStudent).then(res => {
          console.log(res.data);
          this.success=true;
          setTimeout(() => this.success = false , 7000);
        })
        .catch(err => {
         
          //TODO : create a handler with an approach for de error.          
          let errorsRequest = err.response.data.errors;
          console.log(errorsRequest);
          let arrayError = [''];
          arrayError.push(Object.values(errorsRequest))

          this.mensageError = arrayError.reduce((current, next, idx) => {
            return idx == 0 ? current : next + ', ' + current;
          },'');
          this.error =true;
          console.log(this.mensageError)
        });

        this.$refs.form.reset()    

    },
    updateStudent(){
      DataService.update(this.newStudent.id, this.newStudent).then(response => {
          console.log(response.data);
          this.successUpdate=true;
          setTimeout(() => this.$router.push("/find-student"), 5000);
        })
        .catch(err => {
          console.log(err);
          alert(err)
        });
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
      this.$router.push("/find-student");
    },
  },
}
</script>