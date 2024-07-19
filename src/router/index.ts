import { RouteRecordRaw, createRouter, createMemoryHistory } from 'vue-router';
import App from '@/App.vue';
import Cliente_Dash from '../views/Clientes.vue';
import Clente_infor from '../views/ClienteInfor.vue'
const rotas : RouteRecordRaw []=[
    {
        path:'/clientes',
        name:'Cliente_Dash',
        component: Cliente_Dash
    },
    {
        path:'/cliente/:id',
        name:'Clente_infor',
        component: Clente_infor
    }
        
]
const roteador = createRouter({
   history: createMemoryHistory(),
   routes: rotas
})
export default roteador