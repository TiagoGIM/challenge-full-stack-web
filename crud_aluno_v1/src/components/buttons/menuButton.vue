<template>
  <v-btn
    color="green lighten-4"
    width='100%' 
    @click="clickBtn(link)" 
    style="border-radius:0" 
    class='elevation-6 justify-start'
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
    })

      
    }
  }    
}
</script>