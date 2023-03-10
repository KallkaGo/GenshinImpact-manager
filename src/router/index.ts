/*
 * @Author: ZH
 * @Date: 2023-02-08 15:40:38
 * @LastEditTime: 2023-02-08 15:55:37
 * @LastEditors: ZH
 * @Description: 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
const Login = () => import('@/views/login.vue')
const Main = () => import('@/views/main.vue')
const Role = () => import('@/views/page/role.vue')
const User = () => import('@/views/page/user.vue')
const Notfound = () => import('@/views/not-found/404.vue')
const Menu = () => import('@/views/page/menu.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [
            {
                path: "/role",
                name: '123',
                component: Role
            },
            {
                path: "/user",
                name: '234',
                component: User
            },
            {
                path: '/menu',
                name: 'menu',
                component:Menu
            }
        ]

    },
    {
        path: '/:pathMatch(.*)*',
        component: Notfound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.path !== '/login') {
        const token = LocalCache.getCache('token')
        if (!token) {
            return '/login'
        }
    }
})

export default router
