<template>
    <div class="alert" :class="contexto[notificacao.tipo]" v-for="notificacao in notificacoes" :key="notificacao.id"
        role="alert">
        <h4 class="alert-heading">
            {{ notificacao.titulo }}
        </h4>
        <hr>
        <p class="mb-0">{{ notificacao.texto }}</p>
    </div>
</template>
<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'Notificacoes-tracker',
    data() {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'alert-success',
                [TipoNotificacao.FALHA]: 'alert-danger',
                [TipoNotificacao.ATENCAO]: 'alert-warning'
            }
        }
    },
    setup() {
        const store = useStore();
        return {
            notificacoes: computed(() => store.state.notificacoes)
        }
    }
})
</script>
<style scoped>
.alert {
    margin-bottom: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
}
</style>
