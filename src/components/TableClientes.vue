<template>
  <div class="container-fluid" style="margin: auto; text-align: center;"  >
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
              </tr>
            </thead>

            <tbody class="table-group-divider">

              <tr v-for="cliente in clientes" :key="cliente.id">
                <th>{{ cliente.IdentificadorCliente }}</th>
                <th>{{ cliente.Cliente }}</th>
                <th>{{ cliente.Unidade }}</th>
                <th v-if="cliente.atendimentos.length != 0">{{ cliente.atendimentos }}</th>
                <th v-else>N/A</th>
                <th v-if="cliente.ativo === true">&#128994;Ativo</th>
                <th v-else>&#128308;Inativo</th>
                <th>
                  <router-link :to="'/cliente/' + cliente.id" style="color: black" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </router-link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <modalAddClientes :mostrar="modalCliente != false" style="padding-top: 40px;" v-for="cliente in clientesEdit"
    :key="cliente.id">
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
  </modalAddClientes>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { OBTEM_CLIENTES } from '../store/actions';
import { useStore } from 'vuex';
import modalAddClientes from './modalAddClientes.vue';
import { key } from '@/store';
export default defineComponent({
  name: 'Cliente_Table',
  components: {
    modalAddClientes
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
    AbrirModelCliente(cliente: number) {
      this.modalCliente = this.model
      this.id = cliente
      console.log(this.id)
    },
    FecharMOdalAddcliente() {
      this.modalCliente = false
    }
  },
  setup() {
    
    const filtro = ref()
    const store = useStore(key)
    store.dispatch(OBTEM_CLIENTES)
    return {
      clientes: computed(() => store.state.clientes),
      clientesEdit: computed(() => store.state.clientes.filter(it => it.id == filtro.value)),
      filtro,
      store,
      
    }
  }
})
</script>
<style scoped></style>