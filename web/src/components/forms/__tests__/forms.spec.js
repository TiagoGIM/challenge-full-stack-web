//component
import studentForms from '@/components/forms/CreateStudentForms.vue'
//utilities
import { mount,createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import 'regenerator-runtime';
import {expect} from 'chai'

let mock_student = {
  name:'nome',
  email:'ze@golinha.com',
  ra:'123456',
  cpf:'123456789'
};

// forms
describe('CreateStudentForms vue' , () => {
  let wrapper
  const localVue = createLocalVue()

  beforeAll( () => {
    let vuetify = new Vuetify()
    wrapper = mount(studentForms, {
      localVue,
      vuetify,
      propsData: {
        student: mock_student,
      },
    })
  });

  it( "it's a vue instance?", () =>{
    expect(wrapper.exists()).to.be.true;
  });

});

