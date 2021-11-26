import { App } from 'vue'
import More from './more'
import GoodsNav from './goodsNav'
import GoodsAction from './goodsAction'
import GoodsCard from './goodsCard'
import Coupon from './coupon'
import ContactCard from './contactCard'

const components = [
  More,
  GoodsNav,
  GoodsAction,
  GoodsCard,
  Coupon,
  ContactCard,
]

export default {
  install(app: App) {
    components.map(c => {
      app.use(c)
    })
  }
}