<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >
    <h2>Title</h2>
    </v-app-bar>

    <v-navigation-drawer
    app
    color="green"
    >
      <div class="text-center pt-5" style = "color : white">
          <h3>MÓDULO ACADÊMICO</h3>
      </div>

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