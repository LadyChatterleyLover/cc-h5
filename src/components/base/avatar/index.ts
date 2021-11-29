import { App } from 'vue'
import Avatar from './avatar.vue'

export default {
  install(app: App) {
    app.component('van-avatar', Avatar)
  }
}