import { App } from 'vue'
import More from './more.vue'

export default {
  install(app: App) {
    app.component('nut-more', More)
  }
}