import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vue3ColorPicker from "vue3-colorpicker"
import "vue3-colorpicker/style.css"
import base from './components/base'
import charts from './components/charts'
import goods from './components/business'
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vant)

app.use(Antd)
app.use(Vue3ColorPicker)
app.use(base)
app.use(charts)
app.use(goods)

app.mount('#app')
