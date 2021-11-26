import { App } from 'vue'
import Line from './line'
import Bar from './bar'
import Pie from './pie'
import Funnel from './funnel'

const components = [
  Line,
  Bar,
  Pie,
  Funnel
]

export default {
  install(app: App) {
    components.map(c => {
      app.use(c)
    })
  }
}