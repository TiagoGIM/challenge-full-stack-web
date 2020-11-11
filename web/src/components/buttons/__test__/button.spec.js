//components
import deleteBtn from '@/components/buttons/deleteButton.vue'
import editButton from '@/components/buttons/editButton.vue'
//libraries
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'
import { mount,createLocalVue } from '@vue/test-utils';

import 'regenerator-runtime';
import { expect } from 'chai';

let mock_student = {
    name:'nome',
    email:'ze@golinha.com',
    ra:'123456',
    cpf:'123456789'
  };

describe('deleteBtn.vue' ,() => {
  let wrapper
  const localVue = createLocalVue()

  beforeAll( () => {
    let vuetify = new Vuetify()
    wrapper = mount(deleteBtn, {
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

  it('have a v-btn?', () => {
    expect(wrapper.find('.v-btn').exists()).to.be.true;
  });

  it('set a del flag to true when is clicked?', async ()=>{
    wrapper.find('.v-btn').trigger('click')
    await wrapper.vm.$nextTick() 
    expect(wrapper.vm.del).to.be.true;
  });

});

describe('editBtn.vue' ,() => {
    let wrapper
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const router = new VueRouter({routes: [
      {
        path: '/register/:student',
        name: 'Edit',
        props: true},
    ]})
  
    beforeAll( () => {
      let vuetify = new Vuetify()
      wrapper = mount(editButton, {
        localVue,
        router,
        vuetify,
        propsData: {
          student: mock_student
        },
      });    
    });

    it( "it's a vue instance?", () =>{
      expect(wrapper.exists()).to.be.true;
    });
  
    it('have a v-btn?', () => {
      expect(wrapper.find('.v-btn').exists()).to.be.true;
    });
  
    it('send stundent data to edit page?', async () => {
      wrapper.find('.v-btn').trigger('click')
      await wrapper.vm.$nextTick()
      console.log(wrapper.$route)     

    });
  });//end editbtn

  