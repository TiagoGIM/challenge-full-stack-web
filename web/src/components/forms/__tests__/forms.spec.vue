//
import studentForms from '@/components/forms/CreateStudentForms.vue'
//utilities
import { mount } from 'vue-test-utils';
import { shallowMount } from "@vue/test-utils"
import 'regenerator-runtime';


// forms
describe('CreateStudentForms vue' , () => {
  let wrapper
  beforeAll( () => {
    wrapper = shallowMount(studentForms);
  });

  it( "é uma instancia vue?",async () =>{
    expect(wrapper.vm).toBeTruthy()
  });
});

