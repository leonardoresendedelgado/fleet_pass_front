<template>
  <div class="container-fluid" style="margin: auto; text-align: center;">
    <div class="row">
      <div class="col-10" style="margin: auto;">
        <div class="card">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Identificador</th>
                <th scope="col">Cliente</th>
                <th scope="col">Unidade</th>
                <th scope="col">Atendimentos</th>
                <th scope="col">Status</th>
                <th scope="col">Informações</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody class="table-group-divider">

              <tr v-for="unidade in Unidades" :key="unidade.id" >
                <div v-if="!unidade.IdentificadorCliente">
                  <th>Não existe undiades cadastradas</th>
                </div>
                <th>{{ unidade.IdentificadorCliente }}</th>
                <th>{{ unidade.Cliente.nome }}</th>
                <th>{{ unidade.Unidade }}</th>
                <th v-if="unidade.atendimentos.length != 0">{{ unidade.atendimentos }}</th>
                <th v-else>N/A</th>
                <th v-if="unidade.ativo === true">&#128994;Ativo</th>
                <th v-else>&#128308;Inativo</th>
                <th>
                  <router-link :to="`/unidade/${unidade.id}` " style="color: black;" class="info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </router-link>
                </th>
                <th>
                  <button type="button" class="btn del" @click="DeleteUnidades(unidade.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-trash" viewBox="0 0 16 16">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <modalModelo :mostrar="modalCliente != false" style="padding-top: 40px;" v-for="unidade in UnidadesEdit"
    :key="unidade.id">
    <template v-slot:cabecalio>
      <div class="header_modal" style="text-align: center;">
        <h1>Nova Unidade</h1>
      </div>
    </template>
    <template v-slot:corpo>
      <form class="row g-3">
        <div class="col-md-6">
          <input type="text" class="form-control capture" placeholder="Cliente" required>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control capture" placeholder="Unidade" required>
        </div>
        <div class="col-md-10" style="margin-top: 20px; width: 100%;">
          <input type="text" class="form-control capture" placeholder="Endereço" required>
        </div>
        <div class="col-md-6" style="margin-top: 20px;">
          <input type="text" class="form-control capture" placeholder="ID da unidade" required>
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
      <button type="submit" class="btn btn-success">Adicionar</button>
    </template>
  </modalModelo>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { OBTEM_UNIDADES, DELETE_UNIDADES } from '../store/actions';
import { useStore } from 'vuex';
import modalModelo from './modal.vue';
import { key } from '@/store';
export default defineComponent({
  name: 'Undiade_Table',
  components: {
    modalModelo
  },
  data() {
    return {
      modalCliente: false,
      id: 0
    }
  },
  props: {
    model: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    AbrirModelUnidade(cliente: number) {
      this.modalCliente = this.model
      this.id = cliente
      console.log(this.id)
    },
    FecharMOdalAddcliente() {
      this.modalCliente = false
    },
    DeleteUnidades(id: number){
      this.store.dispatch(DELETE_UNIDADES, id)
      window.location.reload
          setTimeout(() => {
                this.store.dispatch(OBTEM_UNIDADES)
                this.$router.push('/unidades');
            }, 1000)
            const apiSaveMethod = async () => {
                return new Promise<void>((resolve) => setTimeout(resolve, 500));
            };
    }
  },
  setup() {

    const filtro = ref()
    const store = useStore(key)
    store.dispatch(OBTEM_UNIDADES)
    return {
      Unidades: computed(() => store.state.Undiades),
      UnidadesEdit: computed(() => store.state.Undiades.filter(it => it.id == filtro.value)),
      filtro,
      store,

    }
  }
})
</script>
<style scoped>
.table td, .table th {
  vertical-align: 0;
}
.del:hover{
  background-color: red;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.info:hover{
  border-radius: .25rem;
  padding: .300rem .800rem .700rem .800rem;
  background-color: rgba(30, 7, 245, 0.418);
  border: 1px solid transparent;
  line-height: 1.5;

}
</style>