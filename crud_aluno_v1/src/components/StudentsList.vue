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
      <!-- <BtnEditStudant/><BtnDelStudant/> -->
      <v-btn
      @click="showDeleteDialog(item)"
      >delete  {{ item.id }}   </v-btn>
      </template>   
    </v-data-table>

    <v-dialog width="600" v-model="deleteDialog">
      <v-card width="600">
          <v-card-text>
            <h3> {{student.name}} </h3>
            <h5> {{student.ra}} </h5>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="deleteDialog = false">CANCELAR</v-btn>
              <v-btn @click="deleteDialog=false">DELETAR</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>



  </v-card>
</template>

<script>
  import DataService from '../services/DataService.js';
  //import BtnDelStudant from './buttons/BtnDelStudant.vue'
  //import BtnEditStudant from './buttons/editButton.vue'


export default {
  name: 'StudentList',
    components: {
      //BtnDelStudant,
      //BtnEditStudant,
    },
  data()
  {
     return {
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
    showDeleteDialog(student){
      this.student = student;
      this.deleteDialog=true;
    },
    
    removeStudent() {
        DataService.delete(this.student.id).then(() => {
            alert('removido com sucesso');
            this.getList()
        });
    },
    getList(){
      DataService.getAll().then(res => {

        this.users= res.data


        console.log(this.users)
      }).
      catch(err=>{
        console.log(err);
      })
      
    }
  },
  mounted(){
    this.getList()
  }
}
</script>
<style scoped>
</style>

