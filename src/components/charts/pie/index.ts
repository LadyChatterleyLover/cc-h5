import { App } from 'vue'
import Pie from './pie.vue'

export default {
  install(app: App) {
    app.component('van-pie', Pie)
  }
}
