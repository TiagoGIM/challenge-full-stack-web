<template>
  <div class="register">
    <CreateStudentForms :student="student"/>
  </div>
</template>

<script>
  import CreateStudentForms from '@/components/CreateStudentForms.vue'

  export default {

    name: 'Register',

    props : {
      student : Object,
      },
      
    components: {
      CreateStudentForms,
    },
  }

</script>
