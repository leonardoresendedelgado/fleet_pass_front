import { RouteRecordRaw, createRouter, createMemoryHistory } from 'vue-router';
import App from '@/App.vue';

const rotas : RouteRecordRaw []=[
    {
        path:'/',
        name:'App',
        component: App
    }
]
const roteador = createRouter({
   history: createMemoryHistory(),
   routes: rotas
})
export default roteador