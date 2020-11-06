<template>
  <v-container>
  <layoutPages :title ="title"/>
  <h1> BEM-VINDO !</h1>
  </v-container>
</template>

<script>
  import layoutPages from '@/components/layouts/layoutPage'

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
