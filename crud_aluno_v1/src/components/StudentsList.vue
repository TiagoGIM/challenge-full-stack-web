  <template>
  <v-card elevation="1"  >
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
        <BtnEdit :student="item" />
        <deleteBtn :student="item"/> 
      </template>   
    </v-data-table>
    
    <deleteDialog
    :hidded='showDeleteDialog' 
    :btnClickHandler="removeStudent"
    :student="student"
    @deleteDialog-hide-event="abortDeleteAndClear"
    />

  </v-card>
</template>

<script>
  import DataService from '@/services/DataService.js';
  import deleteDialog from './dialogs/DeleteDialog.vue'
  import deleteBtn from './buttons/deleteButton.vue'
  import BtnEdit from './buttons/editButton.vue'
  import store from '@/store';

export default {
  name: 'StudentList',
    components: {
    deleteBtn,
    deleteDialog,
    BtnEdit,
    },
  data()
  {
     return {
       showDeleteDialog:false,
       search: '',
       headers : [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'RA', value: 'ra' },
        { text: 'CPF', value: 'cpf' },
        {
          text: '',
          sortable:false,
          value: 'action',
          align:'center', 
        },
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
          this.showDeleteDialog=false
          this.getList()
          console.log(process.env.VUE_APP_NOT_SECRET_CODE);
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
    abortDeleteAndClear(){
      this.showDeleteDialog = false;
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
        console.log(trigger);
      }
      if(trigger==='deleteStudent'){
        this.student = state.student;
        this.showDeleteDialog=state.deleteAction;
      }
    });
    this.getList();
  }
}
</script>
<style scoped>
</style>

