import { App } from 'vue'
import GoodsAction from './goodsAction.vue'

export default {
  install(app: App) {
    app.component('van-goods-action', GoodsAction)
  }
}