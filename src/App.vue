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
        <Nav_Aside />
      </div>
      <div class="main_footer">
        <router-view class="section"></router-view>
        <div class="footer">teste</div>
      </div>

    </div>


  </div>
</template>

<script lang="ts">
import Nav_Aside from './components/Aside.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Nav_Aside
  }
})
</script>

<style>
.header {
  position: fixed;
  width: 100vw;
  height: 70px;
  display: flex;
}

.logo {
  background-color: #202231e3;
  width: 255px;
  height: 70px;
  text-align: center;
  overflow: hidden;
  border-right: solid 1px rgb(82, 82, 82);
}

.logo img {
  width: 80%;
  height: 250px;
  margin-top: -80px;
}

.header_avatar {
  background-color: #202231e3;
  flex-grow: 1;
  height: 70px;
}

.main {
  background-color: black;
  display: flex;
  min-height: calc(100vh - 70px);
}

.nav {
  background-color: #282a3c;
  min-height: calc(100% - 140px);
  margin-top: 70px;
  position: fixed;
  position: absolute;

}

.main_footer {
  width: 100%;
  margin-top: 70px;
  background-color: rgba(255, 255, 255, 0.938);
}

.section {
  flex: 1;
  padding: 20px;
}

.footer {
    background:  #202231;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    height: 70px;
    width: 100%;
}
</style>
