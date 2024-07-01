<template>
    <div class="modal" tabindex="-1" :class="{ 'is-active': mostrar }" v-if="mostrar">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="cabecalio"></slot>
      </div>
      <div class="modal-body">
        <slot name="corpo"></slot>
      </div>
      <div class="modal-footer">
        <slot name="rodape"></slot>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'model_addClientes',
    props: {
        mostrar: {
            type: Boolean,
            requerid: true
        }
    }
})
</script>
<style scoped>
.modal{
    background: rgba(0, 0, 0, 0.589);
    display: flex;
}
</style>