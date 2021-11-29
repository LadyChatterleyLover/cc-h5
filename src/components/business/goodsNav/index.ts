import { App } from 'vue'
import GoodsNav from './goodsNav.vue'

export default {
  install(app: App) {
    app.component('van-goods-nav', GoodsNav)
  }
}