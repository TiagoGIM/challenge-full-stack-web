<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-tooltip left>
      <template v-slot:activator="{ attrs }">
        <v-btn
        tile
        color="deep-purple"
        v-bind="attrs"
        v-on="{click:editStudent}"
        >
          <v-icon
          color = "indigo lighten-5"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
      </template>
      <span>Editar cadastro</span>
    </v-tooltip>
  </v-row>
</template>

<script>
  export default{
    name:'BtnEdit',
  props:
  { 
    student: Object,
  },
  
  componentes: {
//    SucessOperation,
  },
    methods:{
      editStudent(){
        this.$router.push({
          name: 'Edit',
          params : { student: this.student }
        }).catch(err => { 
        // Ignore the vuex err regarding  navigating to the page they are already on.
          if (err.name != "NavigationDuplicated") {
        // But print any other errors to the console
            console.error(err);
            }
          });
      }
    },
  }


</script>
