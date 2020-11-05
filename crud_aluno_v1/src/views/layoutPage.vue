<template>
  <v-container>
    <v-app-bar app color="red" dark short >
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


