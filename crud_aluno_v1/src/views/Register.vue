<template>
  <div class="register">
    <v-app-bar
      app
      color="red"
      dark
    >
    <h2>Cadastro de aluno</h2>
    </v-app-bar>
    <CreateStudentForms :student="student"/>
  </div>
</template>

<script>
  import CreateStudentForms from '@/components/CreateStudentForms.vue'

  export default {

    name: 'Register',

    props : {
      student : Object,
      },
      
    components: {
      CreateStudentForms,
    },
  }

</script>
