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

const creatWrapper = (component , options= {}) => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const vuetify = new Vuetify()
  return mount(component, {
    localVue,
    vuetify,
    ...options,
  });
}

describe('deleteBtn.vue' ,() => {
  let wrapper
  beforeAll( () => {
    wrapper = creatWrapper(deleteBtn,{propsData: {student: mock_student}})
  });

  test( "it's a vue instance?", () =>{
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

}); //end deleteBtn

describe('editBtn.vue' ,() => {
    let wrapper
    const router = new VueRouter({routes: [
      {
        path: '/register/:student',
        name: 'Edit',
        props: true},
    ]})
  
    beforeAll( () => {
      wrapper = creatWrapper( editButton,{propsData: {student: mock_student},router})
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
    });
  });//end editbtn  