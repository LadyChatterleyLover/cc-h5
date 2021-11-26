import { App } from 'vue'
import ContactCard from './contactCard.vue'

export default {
  install(app: App) {
    app.component('nut-contact-card', ContactCard)
  }
}