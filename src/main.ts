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
import pinia from "./store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.mount("#app");
