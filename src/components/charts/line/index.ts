import { App } from 'vue'
import Line from './line.vue'

export default {
  install(app: App) {
    app.component('nut-line', Line)
  }
}
