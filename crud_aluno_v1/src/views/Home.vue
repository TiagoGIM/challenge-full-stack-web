<template>
  <v-container>
    <v-app-bar
      app
      color="red"
      dark
    >
    <h2>Listagem de aluno</h2>
    </v-app-bar>
    <StudentList/>
  </v-container>
</template>

<script>
  import StudentList from '@/components/StudentsList.vue'
  export default {
    name: 'Home',
    components: {
      StudentList,
    },
  }
</script>
