/*
 * @Author: ZH
 * @Date: 2023-02-05 12:07:55
 * @LastEditTime: 2023-02-08 16:20:53
 * @LastEditors: ZH
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import '@/styles/index.scss'
import router from './router'
import App from "./App.vue";
import {createPinia} from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount("#app");
