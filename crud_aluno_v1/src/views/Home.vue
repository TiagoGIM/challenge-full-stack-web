<template>
  <v-container>

    <StudentList/>
    <template v-slot:top>
    </template>

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
