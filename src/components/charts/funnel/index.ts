import { App } from 'vue'
import Funnel from './funnel.vue'

export default {
  install(app: App) {
    app.component('van-funnel', Funnel)
  }
}
