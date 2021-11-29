import { App } from 'vue'
import Avatar from './avatar'

const components = [
  Avatar
]

export default {
  install(app: App) {
    components.map(c => {
      app.use(c)
    })
  }
}