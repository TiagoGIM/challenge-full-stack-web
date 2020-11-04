<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        tile
        color="success"
        v-bind="attrs"
        v-on="on"
        @click="editStudent"
        >
          <v-icon left>
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
        });
      }
    },
    created(){
      console.log(this.student)
    },
  }


</script>
