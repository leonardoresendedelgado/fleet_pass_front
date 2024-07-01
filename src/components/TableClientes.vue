<template>
    <div class="container-fluid" style="margin: auto; text-align: center;">
        <div class="row">
            <div class="col-10" style="margin: auto;">
                <div class="card">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Identificador</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Unidade</th>
                                <th scope="col">Atendimentos</th>
                                <th scope="col">Status</th>
                                <th scope="col">Informações</th>
                            </tr>
                        </thead>
                        <tr v-for="cliente in clientes" :key="cliente.id">
                            <th>{{ cliente.IdentificadorCliente }}</th>
                            <th>{{ cliente.Cliente }}</th>
                            <th>{{ cliente.Unidade }}</th>
                            <th v-if="cliente.atendimentos.length != 0">{{ cliente.atendimentos }}</th>
                            <th v-else>N/A</th>
                            <th v-if="cliente.ativo === true">&#128994;Ativo</th>
                            <th v-else>&#128308;Inativo</th>
                            <th>
                                <button type="button" class="btn  padrao" style="padding: 0;" @click="AbrirModelCliente(cliente.id) ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div  @aoClick="modalCliente" :v-model="filtro = id"></div>
    <modalAddClientes :mostrar="modalCliente != false" style="padding-top: 40px;" v-for="(cliente, index) in clienteEdite" :key="index" :cliente="cliente" >
    <template v-slot:cabecalio>
      <div class="header_modal" style="text-align: center;">
        <h1>Novo cliente</h1>
      </div>
    </template>
    <template v-slot:corpo>
      <form class="row g-3">
        <div class="col-md-6">
          <input type="text" class="form-control capture" placeholder="Cliente"   required>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control capture" placeholder="Unidade"  required>
        </div>
        <div class="col-md-10" style="margin-top: 20px; width: 100%;">
          <input type="text" class="form-control capture" placeholder="Endereço"  required>
        </div>
        <div class="col-md-6" style="margin-top: 20px;">
          <input type="text" class="form-control capture" placeholder="ID da unidade"  required>
        </div>
        <div class="col-md-3" style="margin-top: 20px;">
          <select class="form-control" required>
            <option selected disabled value="inicio">Status</option>
            <option value="true">Ativa</option>
            <option value="false">Inativa</option>
          </select>
        </div>
      </form>
    </template>
    <template v-slot:rodape>
      <button type="button" class="btn btn-danger" @click="FecharMOdalAddcliente">Fechar</button>
      <button type="submit" class="btn btn-success" >Adicionar</button>
    </template>
  </modalAddClientes>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { OBTEM_CLIENTES } from '../store/actions';
import { useStore } from 'vuex';
import modalAddClientes from './modalAddClientes.vue';
import { key } from '@/store';
import ICliente from '@/interfaces/IClientes';
export default defineComponent({
    name: 'Cliente_Table',
    components:{
        modalAddClientes
    },
    emits: ['aoClick'],
    data() {
      return {
        modalCliente: false,
        id: Number
      }
    },
    props: {
      model: {
        type: Boolean,
        default: true
      }
    },
    methods:{
        AbrirModelCliente(cliente: number){
            this.$emit('aoClick', cliente)
        },
        modalCliente(id: number){
            this.modalCliente =  this.model
            this.id = id
        },
        FecharMOdalAddcliente(){
            this.modalCliente = false
        }
    },
    setup() {
        const filtro = ref('')
        const store = useStore(key)
        store.dispatch(OBTEM_CLIENTES)
        return {
            clientes: computed(() => store.state.clientes),
            clientesEdit: computed(() => store.state.clientes.filter(it => it.id == filtro.value)),
            filtro,
            store
        }
    }
})
</script>