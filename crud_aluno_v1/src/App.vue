<template>
  <v-app>
    <v-navigation-drawer
    app
    color="green"
    >
      <template v-slot:prepend>
        <v-list-item >
          <v-list-item-content>
            <div class="text-center pt-5" style = "color : white">
              <h4>MÓDULO ACADÊMICO</h4>
            </div>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-btn large width='100%' style="border-radius:0" class='elevation-6 justify-start'>ALUNOS</v-btn>
    </v-navigation-drawer>

    <v-main>
      <v-container >
        <router-view/>            
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

    data: () => ({
    //
  }),
  watch : {
    $router() {
      console.log(this.$router.name)
    }

  }
    ,
};
</script>

<style >
.main2
{
  border: #3E2723 darken-4 2px solid;
}
</style>