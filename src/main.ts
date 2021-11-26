import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NutUI from "@nutui/nutui"
import "@nutui/nutui/dist/style.css"
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vue3ColorPicker from "vue3-colorpicker"
import "vue3-colorpicker/style.css"
import charts from './components/charts'
import goods from './components/business'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(NutUI)
app.use(Antd)
app.use(Vue3ColorPicker)
app.use(charts)
app.use(goods)

app.mount('#app')
