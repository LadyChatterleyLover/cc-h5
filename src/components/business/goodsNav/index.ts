import { App } from 'vue'
import GoodsNav from './goodsNav.vue'

export default {
  install(app: App) {
    app.component('nut-goods-nav', GoodsNav)
  }
}