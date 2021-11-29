import { App } from 'vue'
import Bar from './bar.vue'

export default {
  install(app: App) {
    app.component('van-bar', Bar)
  }
}
