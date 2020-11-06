<template>
  <v-container flex>
  <layoutPages :title ="title"/>
    <v-sheet max-width=680 center>
      <CreateStudentForms :student="student"/>
    </v-sheet>
  </v-container>
</template>

<script>
  import CreateStudentForms from '@/components/forms/CreateStudentForms.vue'
  import layoutPages from '@/components/layouts/layoutPage'
  export default {
    name: 'Register',
    data(){
      return {
      title:"CADASTRO DE ALUNO",
      }
    },

    props : {
      student : Object,
      },
      
    components: {
      CreateStudentForms,
      layoutPages,
    },
  }

</script>
