<template>
  <div class="container-fluid" style="margin: auto; text-align: center;">
    <h1>Unidades</h1>
    <div class="row">
      <div class="col-10" style="margin: auto;">
        <div class="card">
          <table class="table table-sm">
            <tr class="tr_color">
              <th>
                <button type="button" class="btn btn-success padrao" @click="AbrieModalAddUnidade">
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
  <Unidade_Table />
  <modalModelo :mostrar="modalClienteAdd != false" style="padding-top: 40px;">
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
      <button type="button" class="btn btn-danger" @click="FecharMOdalAddUnidade">Fechar</button>
      <button type="submit" class="btn btn-success" @click="AddUnidade">Adicionar</button>
    </template>
  </modalModelo>
  
</template>
  <script lang="ts">
  import {  defineComponent } from 'vue';
  import {  ADICIONA_UNIDADES, OBTEM_UNIDADES } from '../store/actions';
  import { useStore } from '@/store';
  import modalModelo from '@/components/modal.vue';
  import Unidade_Table from '../components/TableUnidade.vue'
  export default defineComponent({
    name: 'Cliente_Dash',
    components: {
      modalModelo,
      Unidade_Table
    },
    data() {
      return {
        modalClienteAdd: false,
        opt: true
      }
    },
    props: {
      model: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      AbrieModalAddUnidade() {
        this.modalClienteAdd = this.model
      },
      FecharMOdalAddUnidade() {
        this.modalClienteAdd = false
      },
      AddUnidade() {
        var form = document.querySelectorAll('.form-control')
        const Unidade = {
          Cliente: (form[0] as HTMLInputElement).value,
          Unidade: (form[1] as HTMLInputElement).value,
          Endereco: (form[2] as HTMLInputElement).value,
          IdentificadorCliente: (form[3] as HTMLInputElement).value,
          ativo: this.opt
        }
        this.store.dispatch(ADICIONA_UNIDADES, Unidade)
          .then(this.FecharMOdalAddUnidade)
          window.location.reload
          setTimeout(() => {
                this.store.dispatch(OBTEM_UNIDADES)
                this.$router.push('/clientes');
            }, 1000)
            const apiSaveMethod = async () => {
                return new Promise<void>((resolve) => setTimeout(resolve, 500));
            };
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