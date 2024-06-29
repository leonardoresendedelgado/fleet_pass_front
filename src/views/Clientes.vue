<template>
          <div class="col-12" style="text-align: center;">
            <h1>Clientes</h1>
          </div>
          <div class="container" style="text-align: center;">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <table class="table table-hover">
                    <input v-model="searchQuery" placeholder="Filtrar clientes" />
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>Identificador Cliente</th>
                        <th>Numeros de atendimentos</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="overdue-row"  v-for="cliente in clientes" :key="cliente.id">
                        <td>{{ cliente.Cliente }}</td>
                        <td>{{ cliente.IdentificadorCliente }}</td>
                        <td>{{ cliente.atendimentos.length }}</td>
                        <td>
                          <div class="dot-error" v-if="cliente.ativo === true">
                            <P>🟢 Ativo</P>
                          </div>
                          <div v-else>
                            <p>🔴 Inativo</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { OBTEM_CLIENTES } from '../store/actions';
import { useStore } from 'vuex';
import { key } from '../store';
export default defineComponent({
    name: 'Cliente_Dash',
    setup() {
    const store = useStore(key)
    store.dispatch(OBTEM_CLIENTES)
    return {
      clientes: computed(() => store.state.clientes)

    }
  }
})
</script>