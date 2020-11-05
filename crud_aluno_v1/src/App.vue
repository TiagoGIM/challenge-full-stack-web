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

      <menuBtn :label="menu1.label" :link="menu1.path" />

    </v-navigation-drawer>

    <v-main>
      <v-container flex>
        <router-view/>            
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import menuBtn from './components/buttons/menuButton';
export default {
  name: 'App',

    data: () => ({
      menu1 : { label:'Alunos',path:'find-student'}
  
    //
  }),
  components :{
    menuBtn,
  },
} 
</script>
