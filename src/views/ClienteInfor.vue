<template>
    <div class="container-fluid" style="margin: auto; text-align: center; width: 85%;">
        <div class="clienteInform">
            <h1>Informações sobre o cliente</h1>
            <form class="row g-3" >
                
                <div class="col-md-6" >
                    <input type="text" class="form-control capture" v-bind:value="clienteLoc[0].Cliente" required disabled>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control capture" v-bind:value="clienteLoc[0].Unidade" required disabled>
                </div>
                <div class="col-md-10" style="margin-top: 20px; width: 100%;">
                    <input type="text" class="form-control capture" v-bind:value="clienteLoc[0].Endereco" required disabled>
                </div>
                <div class="col-md-6" style="margin-top: 20px;">
                    <input type="text" class="form-control capture" v-bind:value="clienteLoc[0].IdentificadorCliente" required disabled>
                </div>
                <div class="col-md-3" style="margin-top: 20px;">
                    <select class="form-control" v-if="clienteLoc[0].ativo == true" required disabled>
                        <option selected value="true">Ativa</option>
                        <option value="false">Inativa</option>
                    </select>
                    <select v-else>
                        <option selected value="false">Inativa</option>
                        <option value="true">Ativa</option>
                    </select>
                </div>
                <div class="col-md-3" style="margin-top: 20px;" >
                    <div v-if="clienteLoc[0].atendimentos.length == 0"> 
                        <input type="text" class="form-control capture" value="N/A atendimento" required disabled>
                    </div>
                    <div v-else><input type="text" class="form-control capture" v-bind:value="clienteLoc[0].atendimentos" required disabled></div>
                    
                </div>
                <div class="col-md-10" style="margin-top: 20px; width: 100%;">
                    <input type="text" class="form-control capture" v-bind:value="clienteLoc[0].Endereco" required disabled>
                </div>
            </form>
        

        </div>
    </div>

</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { CLIENTES } from '@/store/mutations';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { key } from '@/store';


export default defineComponent({
    name: 'Cliente_Infor',
    setup() {
        const store = useStore(key);
        const filtro = ref('');
        store.dispatch(CLIENTES);
        const rota = useRoute()
        const clienteLoc = computed(() => {
            return store.state.clientes.filter(cliente => cliente.id == Number(rota.params.id));
        });

        return {
            filtro,
            clienteLoc
        };
    }

})
</script>
<style scoped>
.clienteInform {
    margin-top: 50px;
    padding: 10px;
    background-color: rgba(36, 35, 35, 0.253);
}

</style>