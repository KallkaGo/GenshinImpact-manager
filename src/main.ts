/*
 * @Author: ZH
 * @Date: 2023-02-05 12:07:55
 * @LastEditTime: 2023-02-05 13:34:32
 * @LastEditors: ZH
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import '@/styles/index.scss'
import router from './router'
import App from "./App.vue";

const app = createApp(App)
app.use(router)
app.mount("#app");
