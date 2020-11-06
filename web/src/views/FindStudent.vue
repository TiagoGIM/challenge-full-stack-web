<template>
  <v-container>
    <layoutPages :title ="title"/>
      <StudentList/>
  </v-container>
</template>

<script>
  import StudentList from '@/components/tables/StudentsList.vue'
  import layoutPages from '@/components/layouts/layoutPage'

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
