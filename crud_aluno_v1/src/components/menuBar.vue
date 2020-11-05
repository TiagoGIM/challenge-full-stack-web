<template>
    <v-navigation-drawer app
    color="grey lighten-2"
    floating
    >
      <v-list-item>
        <v-list-item-content>
          <v-sheet class="d-flex"
          color="grey lighten-3">
          <v-list-item-title class="title">
            <router-link to='/' active-class="active" >MÓDULO ACADÊMICO</router-link>
          </v-list-item-title>
          </v-sheet>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

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


 