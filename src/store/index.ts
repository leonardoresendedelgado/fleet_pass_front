import IUnidade from "@/interfaces/IUnidade";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as useVueStore } from "vuex";
import { OBTEM_UNIDADES, ADICIONA_UNIDADES, EDITA_UNIDADES, DELETE_UNIDADES, OBTEM_CLIENTES } from './actions'
import INotifica from "@/interfaces/INotificaRsposta";
import { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao";
import { UNIDADES, INFORME_ERROS, INFORME_SUCESSO, AVISO, NOTIFICA, ADD_CLIENTES} from "./mutations";
import http from '../http'
import useNotificador from '@/hooks/notificador'
import IClientes from "@/interfaces/ICliente";
const { notificar } = useNotificador()
export interface Estado {
    // estado interface unidade
    Undiades: IUnidade[],
    Clientes: IClientes[],

    //estado interface notificações 
    notificacoes:INotificacao[],
    sucesso: INotifica[],
    aviso: INotifica[],
    erro: INotifica[],
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        // estado de unidades
        Undiades:[],
        //clientes
        Clientes:[],
        // estado das notificações
        notificacoes:[],
        sucesso:[],
        aviso:[],
        erro:[]


    },
    mutations: {
        [UNIDADES](state, cliente) {
            if (cliente.length >= 1) {

                state.Undiades = cliente
            }
            if (cliente.status) {
                state.Undiades.push(cliente.resposta)
            }
        },
        // mutatios de Notificações 
        [INFORME_ERROS](state, erro ){
            state.erro.push(erro)
            if(state.erro.length >0){notificar(TipoNotificacao.FALHA, "🤯 Temos um erro 🚨",
            `${erro.response.data} `)}
        },
        [INFORME_SUCESSO](state, unidade){
            state.sucesso.push(unidade)
            if(state.sucesso.length >0){notificar(TipoNotificacao.SUCESSO, `😃 Parece que tudo correu bem 👍 `,`${unidade}`)}
        },
        [AVISO](state, aviso){
            state.aviso.push(aviso)
            if(state.aviso.length >0){notificar(TipoNotificacao.ATENCAO, `${aviso.name}`,
            `${aviso.message} `)}
        },
        [NOTIFICA](state, novaNotificacao: INotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)
            setTimeout(()=>{
                state.notificacoes = state.notificacoes.filter(Notificacao =>
                    Notificacao.id != novaNotificacao.id)
            },4000)
        },
        //

        [ADD_CLIENTES](state, CLIENTES){
            if (CLIENTES.length >= 1) {

                state.Clientes = CLIENTES
            }
            if (CLIENTES.status) {
                state.Undiades.push(CLIENTES.resposta)
            }
        }
    },
    actions: {
        async [ADICIONA_UNIDADES]({commit},Unidade){
            try {
                await http.post('/unidades', Unidade)
                .then((resposta)=>commit(INFORME_SUCESSO, resposta.data.message))
                
            }catch(err)  {
                console.log(err)
                commit(INFORME_ERROS, err)
            }
        },
        async [OBTEM_UNIDADES]({ commit }) {
            http.get('/unidades')
                .then((resposta) => {
                    commit(UNIDADES, resposta.data)
                })
                .catch((err) => {
                    commit(INFORME_ERROS, err)
                })
        },
        async [EDITA_UNIDADES]({ commit },CLIENTES) {
            http.put( `/unidades/${CLIENTES.id}`,CLIENTES)
                .then((resposta) => {
                    commit(INFORME_SUCESSO, resposta.data.message)
                })
                .catch((err) => {
                    commit(INFORME_ERROS, err)
                })
        },
        async [DELETE_UNIDADES]({commit}, id:number){
            http.delete(`/unidades/${id}`)
            .then((resposta) => {
                commit(INFORME_SUCESSO, resposta.data.message)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        // Clientes
        async [OBTEM_CLIENTES]({commit}){
            try {
                http.get('/clientes')
                .then(resposta =>{
                    commit(ADD_CLIENTES, resposta.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
})
export function useStore():Store<Estado>{
    return useVueStore(key)
}