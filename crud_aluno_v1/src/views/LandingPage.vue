<template>
  <v-container>
  <layoutPages :title ="title"/>
  <h1> BEM-VINDO !</h1>
  </v-container>
</template>

<script>
  import layoutPages from '@/views/layoutPage'

  export default {
    name: 'home',
    data(){
      return {
      title:"MODULO ACADÊMICO",
      }
    },
    components: {
      layoutPages,
    },
  }

</script>
