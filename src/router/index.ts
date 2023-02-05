import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Login = () => import('@/views/login.vue')
const Main=()=>import('@/views/main.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect:'/main'
    },
    {
        path: '/login',
        name: 'login',
        component:Login
    },
    {
        path: '/main',
        name: 'main',
        component:Main
        
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
