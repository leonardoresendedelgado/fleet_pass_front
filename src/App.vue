<template>
  <div class="container-fluid " style="padding: 0%;">
    <div class="row header" style="margin: 0; padding: 0;">
      <div class="logo">
        <img src="../public/LG250.png" alt="">
      </div>
      <div class="header_avatar">
        informações de avatar
      </div>
    </div>
    <div class="row main" style="margin: 0; padding: 0;">
      <div class="nav">
        NAV
      </div>
      <div class="main_footer">
        <div class="section">
          <div class="card-filmes" v-for="cliente in clientes" :key="cliente.id">
            {{ cliente.Cliente }} <br>
            {{ cliente.Endereco }} <br>
            {{ cliente.IdentificadorCliente }}<br>
            {{ cliente.ativo }}<br>
            <div v-if="cliente.atendimentos.length > 0 ">
              <div v-for="(atendimento, index) in  cliente.atendimentos " :key="index" >
                <br>
                {{ atendimento.TransporteUtilizado}}<br>
                {{ atendimento.Percurso}}<br>
                {{ atendimento.data}}<br><br>
              </div>
            </div>
            <div v-else>
              Sem atendimentos registrados.
            </div>
          </div>
        </div>
        <!--<div class="footer">teste</div>-->
      </div>

    </div>


  </div>
</template>

<script lang="ts">
import Nav_Aside from './components/Aside.vue';
import IAtendimento from './interfaces/IAtendimentos';
import { OBTEM_CLIENTES } from './store/actions';
import { useStore } from 'vuex';
import { key } from './store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore(key)
    store.dispatch(OBTEM_CLIENTES)
    return {
      clientes: computed(() => store.state.clientes)
      
    }
  }
})
</script>

<style>
.header {
  position: fixed;
  background-color: black;
  width: 100vw;
  height: 70px;
  display: flex;
}

.logo {
  background-color: #6e6b6b;
  width: 255px;
  height: 70px;
  text-align: center;
  overflow: hidden;
}

.logo img {
  width: 80%;
  margin-top: -50px;
}

.header_avatar {
  background-color: rgb(120, 121, 121);
  flex-grow: 1;
  height: 70px;
}

.main {
  background-color: black;
  display: flex;
  min-height: calc(100vh - 70px);
}

.nav {
  background-color: blue;
  min-height: calc(100% - 70px);
  margin-top: 70px;
  width: 255px;
  position: fixed;
}

.main_footer {
  width: calc(100% - 255px);
  margin-top: 70px;
  margin-left: 255px;
  background-color: chartreuse;
}

.section {
  background-color: rgb(3, 204, 204);
}

.footer {
  margin-top: -8px;
  background-color: coral;
  height: 70px;
}
</style>
