<template>
  <div class="container-fluid" style="margin: auto; text-align: center;">
    <h1>Unidades</h1>
    <div class="row">
      <div class="col-10" style="margin: auto;">
        <div class="card">
          <table class="table table-sm">
            <tr class="tr_color">
              <th>
                <button type="button" class="btn btn-success padrao" @click="AbrieModalAddCliente">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-person-plus" viewBox="0 0 16 16">
                    <path
                      d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    <path fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <p style="margin:auto auto auto 10px;">Adicionar Unidade</p>
                </button>
              </th>
            </tr>
          </table>
          
        </div>
      </div>
    </div>
  </div>
  <Cliente_Table />
  <modalAddClientes :mostrar="modalClienteAdd != false" style="padding-top: 40px;">
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
          <select class="form-control" v-model="opt" required>
            <option selected disabled value="inicio">Status</option>
            <option value="true">Ativa</option>
            <option value="false">Inativa</option>
          </select>
        </div>
      </form>
    </template>
    <template v-slot:rodape>
      <button type="button" class="btn btn-danger" @click="FecharMOdalAddcliente">Fechar</button>
      <button type="submit" class="btn btn-success" @click="AddCliente">Adicionar</button>
    </template>
  </modalAddClientes>
  
</template>
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import {  ADICIONA_CLIENTES } from '../store/actions';
  import { useStore } from 'vuex';
  import modalAddClientes from '@/components/modalAddClientes.vue';
  import Cliente_Table from '../components/TableClientes.vue'
  export default defineComponent({
    name: 'Cliente_Dash',
    components: {
      modalAddClientes,
      Cliente_Table
    },
    data() {
      return {
        modalClienteAdd: false,
        opt: 'inicio'
      }
    },
    props: {
      model: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      AbrieModalAddCliente() {
        this.modalClienteAdd = this.model
      },
      FecharMOdalAddcliente() {
        this.modalClienteAdd = false
      },
      AddCliente() {
        var form = document.querySelectorAll('.form-control')
        const Cliente = {
          Cliente: (form[0] as HTMLInputElement).value,
          Unidade: (form[1] as HTMLInputElement).value,
          Endereco: (form[2] as HTMLInputElement).value,
          IdentificadorCliente: (form[3] as HTMLInputElement).value,
          ativo: this.opt
        }
        this.store.dispatch(ADICIONA_CLIENTES, Cliente)
          .then(this.FecharMOdalAddcliente)
      }
    },
    setup() {
      const store = useStore()
      return {
        store
      }
    }
  })
</script>
  <style scoped>
  .card {
    margin: auto;
    border-radius: 10px;
  }

  .tr_color {
    background-color: #202231e3;
    color: white;
  }

  .table {
    margin-bottom: 0;
  }

  /*configuração modal*/
  .header_modal {
    width: 100%;
  }

  /*Configurações de botões*/
  .padrao {
    display: inline-flex;
  }
</style>