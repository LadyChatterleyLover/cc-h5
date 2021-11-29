import { App } from 'vue'
import Qrcode from './qrcode.vue'

export default {
  install(app: App) {
    app.component('van-qrcode', Qrcode)
  }
}