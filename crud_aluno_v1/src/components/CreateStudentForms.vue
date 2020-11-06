<template>
<div>
  <v-alert
    type ='purple'
    v-if='success'
    dismissible
  >Cadastro realizado !
  </v-alert>
  <v-alert
  type ='pink accent-4'
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
      :disabled="editMode"
      placeholder="Informe o registro acadêmico"
      outlined
    ></v-text-field>

    <v-text-field
      v-model="newStudent.cpf"
      :counter="9"
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
      PERFIL ATUALIZADO    !
      </v-snackbar>

</div>
</template>

<script>
import DataService from '@/services/DataService.js';

export default {
  name: 'CreateStudentForms',

  props:
  { 
    student: Object,
  },  
  data () {
    return {
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      cpfRules:[
        v => !!v || 'CPF is required',
        v => (v && v.length >= 9) || 'CPF must be less than 9 characters',
      ],
      raRules:[
        v => !!v || 'RA is required',
        v => (v && v.length >= 9) || 'RA must be less than 9 characters',
      ],
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
          setTimeout(() => this.success = false , 10000);
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