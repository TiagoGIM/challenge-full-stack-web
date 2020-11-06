<template>
  <v-container>
    <layoutPages :title ="title"/>
      <StudentList/>
  </v-container>
</template>

<script>
  import StudentList from '@/components/StudentsList.vue'
  import layoutPages from '@/views/layoutPage'

  export default {
    name: 'FindStudent',
    data(){
      return {
      title:"CONSULTA DE ALUNOS",
      }
    },
    components: {
      StudentList,
      layoutPages,
    },
  }
</script>
