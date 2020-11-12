//components
import deleteBtn from '@/components/buttons/deleteButton.vue'
import editButton from '@/components/buttons/editButton.vue'
//libraries
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'
import { mount,createLocalVue } from '@vue/test-utils';
import 'regenerator-runtime';
import { expect } from 'chai';
import {createRouter} from '@/router'

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
  let wrapperDeleteBtn
  beforeAll( () => {
    wrapperDeleteBtn = creatWrapper(deleteBtn,{propsData: {student: mock_student}})
  });

  it( "it's a vue instance?", () =>{
    expect(wrapperDeleteBtn.exists()).to.be.true;
  });

  it('have a v-btn?', () => {
    expect(wrapperDeleteBtn.find('.v-btn').exists()).to.be.true;
  });

  it('set a del flag to true when is clicked?', async ()=>{
    wrapperDeleteBtn.find('.v-btn').trigger('click')
    await wrapperDeleteBtn.vm.$nextTick() 
    expect(wrapperDeleteBtn.vm.del).to.be.true;
  });
}); //end deleteBtn

describe('editBtn.vue' ,() => {
    let wrapperEditBtn
    const router = createRouter()  
    beforeAll( () => {
      wrapperEditBtn = creatWrapper( editButton,{ router,propsData: {student: mock_student} })
    });

    it( "it's a vue instance?", () =>{
      expect(wrapperEditBtn.exists()).to.be.true;
    });
  
    it('have a v-btn?', () => {
      expect(wrapperEditBtn.find('.v-btn').exists()).to.be.true;
    });
  
    it('send stundent data to edit page?', async () => {
      wrapperEditBtn.find('.v-btn').trigger('click')
      await wrapperEditBtn.vm.$nextTick()
    });
  });//end editbtn  