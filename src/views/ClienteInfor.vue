<template>
    <div class="container-fluid" style="margin: auto; text-align: center; width: 85%;">
        <div class="clienteInform">
            <h1>Informações sobre o cliente</h1>
            <form class="row g-3">


                <div class="input-group col-md-6">
                    <span class="input-group-text" id="basic-addon1">Cliente:</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        v-bind:value="unidadeLoc[0].Cliente.nome" required disabled>
                </div>
                <div class="input-group col-md-6">
                    <span class="input-group-text" id="basic-addon1">Unidade:</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        v-bind:value="unidadeLoc[0].Unidade" required disabled>
                </div>
                <div class="input-group col-md-10" style="margin-top: 20px; width: 100%;">
                    <span class="input-group-text" id="basic-addon1">Endereço:</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        v-bind:value="unidadeLoc[0].Endereco" required disabled>
                </div>
                <div class="input-group col-md-6" style="margin-top: 20px;">
                    <span class="input-group-text" id="basic-addon1">Identificação:</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        v-bind:value="unidadeLoc[0].IdentificadorCliente" required disabled>
                </div>
                <div class="input-group col-md-3" style="margin-top: 20px;">
                    <span class="input-group-text" id="basic-addon1">Status:</span>
                    <select class="form-control" v-model="opt" required disabled>
                        <option :value="true">Ativa</option>
                        <option :value="false">Inativa</option>


                    </select>
                </div>
                <div class=" col-md-6" style="margin-top: 20px;">
                    <div v-if="unidadeLoc[0].atendimentos.length == 0" class="input-group">
                        <span class="input-group-text" id="basic-addon1">Cliente:</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                            value="N/A Atendimentos" required disabled>
                    </div>
                    <div v-else class="input-group">
                        <span class="input-group-text" id="basic-addon1">Cliente:</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                            v-bind:value="unidadeLoc[0].atendimentos" required disabled>
                    </div>
                    <div class=" col-md-10" style=" display: flex; margin: 10px -20px 10px 5px; ">
                        <button type="button" class="btn btn-light" @click="edit" style="margin-right: 10px;"  >
                            Edite
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-pen" viewBox="0 0 16 16">
                                <path
                                    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                            </svg>
                        </button>
                        <button type="button" class="btn btn-success" id="save" 
                            style=" display: none; margin-right: 10px;" @click="EditUnidade">
                            Salvar
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-floppy" viewBox="0 0 16 16">
                                <path d="M11 2H9v3h2z" />
                                <path
                                    d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                            </svg>
                        </button>
                        <button type="button" class="btn btn-danger" id="Close"
                            style=" display: none;" @click="fechaEdit">
                            Fechar
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-x-square" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>

                </div>
            </form>


        </div>
    </div>

</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { UNIDADES } from '@/store/mutations';
import { EDITA_UNIDADES, OBTEM_UNIDADES } from '../store/actions';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { key } from '@/store';


export default defineComponent({
    name: 'Cliente_Infor',

    methods: {
        edit() {
            var form = document.querySelectorAll('.form-control')
            var btnSave = document.getElementById("save") as HTMLButtonElement
            var btnClose = document.getElementById("Close") as HTMLButtonElement
            form.forEach(e => {
                e.removeAttribute('disabled')
            })
            btnSave.style.display = "inline"
            btnClose.style.display = "inline"

        },
        fechaEdit(){
            var btnFecha = document.getElementById("Close") as HTMLButtonElement
            var btnSave = document.getElementById("save") as HTMLButtonElement
            var form = document.querySelectorAll('.form-control')
            btnFecha.style.display = "none"
            btnSave.style.display = "none"
            form.forEach(e => {
                (e as HTMLInputElement).disabled = true
            })
        },
        EditUnidade() {
            var form = document.querySelectorAll('.form-control')
            var btnSave = document.getElementById("save") as HTMLButtonElement
            const Unidade= {
                id: this.id,
                Cliente: (form[0] as HTMLInputElement).value,
                Unidade: (form[1] as HTMLInputElement).value,
                Endereco: (form[2] as HTMLInputElement).value,
                IdentificadorCliente: (form[3] as HTMLInputElement).value,
                ativo: this.opt
            }
            form.forEach(e => {
                (e as HTMLInputElement).disabled = true
            })
            this.store.dispatch(EDITA_UNIDADES, Unidade)
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
        const store = useStore(key);
        const filtro = ref('');
        store.dispatch(UNIDADES);
        const rota = useRoute()
        const id = Number(rota.params.id)
        const unidadeLoc = computed(() => {
            return store.state.Undiades.filter(UNIDADE => UNIDADE.id == id);
        });
        const opt = unidadeLoc.value[0].ativo
        return {
            opt,
            filtro,
            unidadeLoc,
            id,
            store
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