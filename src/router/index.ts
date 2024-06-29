import { RouteRecordRaw, createRouter, createMemoryHistory } from 'vue-router';
import App from '@/App.vue';
import Cliente_Dash from '../views/Clientes.vue'
const rotas : RouteRecordRaw []=[
    {
        path:'/clientes',
        name:'Cliente_Dash',
        component: Cliente_Dash
    }
        
]
const roteador = createRouter({
   history: createMemoryHistory(),
   routes: rotas
})
export default roteador