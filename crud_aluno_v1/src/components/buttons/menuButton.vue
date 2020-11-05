<template>
    <v-btn
     large 
     width='100%' 
     @click="clickBtn(link)" 
     style="border-radius:0" 
     class='elevation-6 justify-start'>
     {{label}}
    </v-btn>
</template>

<script>
export default {
    name: "menuBtn",
    props: {
        label :String,
        link : String,
    },
    methods:{
        clickBtn(where){
        this.$router.push(where);
        }
    }    
}
</script>