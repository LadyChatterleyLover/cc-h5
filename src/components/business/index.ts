import { App } from 'vue'
import More from './more'
import GoodsNav from './goodsNav'
import GoodsAction from './goodsAction'
import GoodsCard from './goodsCard'
import Coupon from './coupon'
import ContactCard from './contactCard'
import Qrcode from './qrcode'

const components = [
  More,
  GoodsNav,
  GoodsAction,
  GoodsCard,
  Coupon,
  ContactCard,
  Qrcode
]

export default {
  install(app: App) {
    components.map(c => {
      app.use(c)
    })
  }
}