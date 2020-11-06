<template>
    <v-navigation-drawer app
      color="grey lighten-4"
      floating
    >
    <v-sheet 
      class="home-div"
      height=50
      color="deep-purple"
      width=100%
    >
      <v-list-item link>
        <v-list-item-content>          
          <v-list-item-title class="title" color='white'>
            <router-link to='/' 
            tag="h4" 
            >MODULO ACADÊMICO</router-link>

          </v-list-item-title>          
        </v-list-item-content>        
      </v-list-item>
    </v-sheet>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content> 
            <menuBtn :label="item.title" :link="item.path"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

import menuBtn from './buttons/menuButton';

  export default {
      name:'menuBar',
    data () {
      return {
        items: [
          { title: 'Alunos',path:'/find-student', icon: 'mdi-folder-account' },
          { title: 'Professores',path:'/somepath', icon: ' mdi-clipboard-account' },
          { title: 'Tutores', path:'somepath2',icon: ' mdi-account-multiple' },
        ],
      }
    },
     components :{
        menuBtn,
    },
  }
</script>

<style scoped>
h4 {
    color:white;
} 

</style>}