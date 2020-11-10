//components
import deleteBtn from '@/components/buttons/deleteButton.vue'
import editButton from '@/components/buttons/editButton.vue'
//libraries
import Vuetify from 'vuetify';
import { mount,createLocalVue } from 'vue-test-utils';
import 'regenerator-runtime';

import sinon from 'sinon'

let mock_student = {
    name:'nome',
    email:'ze@golinha.com',
    ra:'123456',
    cpf:'123456789'
  }

  describe('deleteBtn.vue' ,() => {
    let wrapper
    const localVue = createLocalVue()
    let vuetify
  
    beforeAll( () => {
       vuetify = new Vuetify()
      wrapper = mount(deleteBtn, {
        localVue,
        vuetify,
        propsData: {
          student: mock_student
        }
      })
    });
  
    test( "it's a vue instance?", () =>{
      expect(wrapper.isVueInstance()).toBeTruthy()
    });
  
    it('have a v-btn?', () => {
      expect(wrapper.find('.v-btn').exists()).toBe(true)
    });
  
    it('set a del flag to true when is clicked?', async ()=>{
      wrapper.find('.v-btn').trigger('click')
      await wrapper.vm.$nextTick() 
      expect(wrapper.vm.del).toBe(true)
    });
  });

  
describe('editBtn.vue' ,() => {
    let wrapper
    let vuetify
    const localVue = createLocalVue()
  
    beforeAll( () => {
      sinon.spy(console, 'error');
      vuetify = new Vuetify()
      wrapper = mount(editButton, {
        localVue,
        vuetify,
        props: {
          student: mock_student
        },
      });    
    });
    test( "it's a vue instance?", () =>{
      expect(wrapper.isVueInstance()).toBeTruthy()
    });
   
    it('send to edit page?', async () => {
      wrapper.find('.v-btn').trigger('click')
      await wrapper.vm.$nextTick()
    });
    afterEach(function () {
      expect(console.error, `console.error() has been called ${console.error.callCount} times.`).not.to.have.been.called;
      console.error.restore();
    });
  });//end editbtn
  
  