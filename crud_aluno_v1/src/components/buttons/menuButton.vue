<template>
  <v-btn
    @click="clickBtn(link)" 
    class='elevation-2 justify-start'
    color="purple darken-4"
    outlined
    tile
    width=100%
    elevation=2
    sticky
      >
    <v-icon>{{iconBadge}}</v-icon>
    {{label}}
  </v-btn>
</template>

<script>
export default {
  name: "menuBtn",
  props: {
      label :String,
      link : String,
      iconBadge:String,
  },
  methods:{
  clickBtn(where){
        this.$router.push(where)
        .catch(err => { 
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (err.name != "NavigationDuplicated") {
       // But print any other errors to the console
        console.error(err);
      }
    });     
    }
  }    
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@600&display=swap');
h2{
  font-family: 'Libre Franklin', sans-serif;
  font-size: 20px;
}

</style>

