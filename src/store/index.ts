import ICliente from "@/interfaces/IClientes";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as useVueStore } from "vuex";
import { OBTEM_CLIENTES, ADICIONA_CLIENTES } from './actions'
import { CLIENTES, ADD_CLIENTES } from "./mutations";
import http from '../http'
export interface Estado {
    clientes: ICliente[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        clientes:[]
    },
    mutations: {
        [CLIENTES](state, cliente) {
            if (cliente.length >= 1) {
                state.clientes = cliente
            }
            if (cliente.status) {
                state.clientes.push(cliente.resposta)
            }
        }
    },
    actions: {
        async [ADICIONA_CLIENTES]({commit},CLIENTES){
            try {
                await http.post('clientes', CLIENTES)
                
            }catch(err)  {
                console.log(err)
            }
        },
        async [OBTEM_CLIENTES]({ commit }) {
            http.get('clientes')
                .then((resposta) => {
                    commit(CLIENTES, resposta.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})
export function useStore():Store<Estado>{
    return useVueStore(key)
}