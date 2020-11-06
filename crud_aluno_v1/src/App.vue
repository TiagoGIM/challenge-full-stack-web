<template>
  <v-app>
      <menuBar/>
    <v-main>
      <v-container flex>
        <router-view/>            
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import menuBar from './components/menuBar.vue'
export default {
  name: 'App',
  components :{
    menuBar,
  },
} 
</script>
