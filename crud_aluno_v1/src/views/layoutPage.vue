<template>
  <v-container>
    <v-app-bar app color="deep-purple darken-2" dark short height='50'>
      <v-spacer/> 
        <h2>{{title}}</h2>
      <v-spacer/>
    </v-app-bar>
  </v-container>
</template>

<script>
export default{
  name:'layoutPages',
  props:
  { 
    title: String,
  },  
  componentes: {
//    SucessOperation,
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Libre+Franklin&display=swap');
h2{
  font-family: 'Libre Franklin', sans-serif;
  }
</style>