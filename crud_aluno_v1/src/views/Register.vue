<template>
  <div class="register">
    <CreateStudentForms/>
  </div>
</template>

<script>
  import CreateStudentForms from '@/components/CreateStudentForms.vue'

  export default {
    name: 'Register',
    components: {
      CreateStudentForms,
    },
  }

</script>
