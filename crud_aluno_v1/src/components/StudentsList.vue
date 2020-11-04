  <template>
  <v-card elevation="1">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-account-search"
        label="Busque por aluno"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        color="teal darken-4"
        outlined
        elevation="2"
        x-large
        @click="$router.push('/register')"    
        
      >Cadastrar Aluno
        <v-icon > mdi-account-plus</v-icon>
      </v-btn> 

    </v-card-title>

    <v-data-table
      class="table-striped"
      :headers="headers"
      :items="users"
      :search="search"
    >
      <template v-slot:item.action="{item}">
        <BtnEdit :student="item" /><!-- <BtnDelStudant key="{{item.id}}"/> -->
        <BtnDelete :student="item"/> 
      </template>   
    </v-data-table>

    <v-dialog width="600"  v-model="showof">
      <v-card width="600">
          <v-card-text>
            <h2>Deseja excluir o Aluno: </h2>
            <h3>Nome: {{student.name}} </h3>
            <h2> e as informações : </h2>
            <h4> Email : {{student.email}} </h4>
            <h4> CPF : {{student.cpf}} </h4>
            <h4>Registro Acadêmico: {{student.ra}} </h4>
            <h2>Do sistema </h2>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="abort">CANCELAR</v-btn>
              <v-btn @click="removeStudent">DELETAR</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  import DataService from '@/services/DataService.js';
  import BtnDelete from './buttons/deleteButton.vue'
  import BtnEdit from './buttons/editButton.vue'
  import store from '@/store';

export default {
  name: 'StudentList',
    components: {
    BtnDelete,
    BtnEdit,
    },
  data()
  {
     return {
       sharedData : store.state.deleteStudent,
       showof:false,
       search: '',
       headers : [
        {
          text: 'name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'RA', value: 'ra' },
        { text: 'CPF', value: 'cpf' },
        { text: 'Ação', value: 'action' },
        ],
        users:[],
        deleteDialog : false,
        student : {
          id: null,
          name : null,
          cpf: null,
          ra:null,
          email:null,
        }
      };
  },
  methods : {
    editStudent(studentCurrent){
      this.$router.push({
        name: 'Edit',
        params : { student: studentCurrent }
        });
    },
    removeStudent() {
        DataService.delete(this.student.id).then(() => {
          this.showof=false
          this.getList()
        })
        .catch(err=>{
          alert("some error",err);
        });
    },
    getList(){
      DataService.getAll().then(res => {

        this.users= res.data

        console.log(this.users)
      })
      .catch(err=>{
        console.log(err);
      })
      
    },
    abort(){
      this.showof = false;
      this.student = {
          id: null,
          name : null,
          cpf: null,
          ra:null,
          email:null,
        };
        store.commit('deleteAbort');
    }
  },
  mounted(){
  store.subscribe((mutation) => {
      const trigger = mutation.type;
      const state = mutation.payload;
      if(trigger==='deleteAbort'){
        console.log(this.sharedData);
      }
      if(trigger==='deleteStudent'){
        this.student = state.student;
        this.showof=state.deleteAction;
      }
    });
    this.getList();
  }
}
</script>
<style scoped>
</style>

