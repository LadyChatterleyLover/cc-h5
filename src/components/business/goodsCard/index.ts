import { App } from 'vue'
import GoodsCard from './goodsCard.vue'

export default {
  install(app: App) {
    app.component('van-good-card', GoodsCard)
  }
}