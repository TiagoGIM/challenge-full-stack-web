<template>
  <v-container>
  <layoutPages :title ="title"/>
<v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  wdith=100%
  src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.png"
  ></v-img>
  </v-container>
</template>

<script>
  import layoutPages from '@/components/layouts/layoutPage'

  export default {
    name: 'pageNotFound',
    data(){
      return {
      title:"PÁGINA NÃO ENCONTRADA",
      }
    },
    components: {
      layoutPages,
    },
  }

</script>
