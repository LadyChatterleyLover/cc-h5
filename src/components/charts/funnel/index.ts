import { App } from 'vue'
import Funnel from './funnel.vue'

export default {
  install(app: App) {
    app.component('nut-funnel', Funnel)
  }
}
