<template>
  <v-row
    align="center"
    justify="space-around"
    outlined
  >
  <v-tooltip 
  left

  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        tile
        color="error"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account-remove</v-icon>
      </v-btn>
    </template>
    <span >Remover do registro</span>
  </v-tooltip>
  </v-row>
</template>

<script>

export default{
    name:'BtnDelStudant',
  }

</script>

