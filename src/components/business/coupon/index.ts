import { App } from 'vue'
import Coupon from './coupon.vue'

export default {
  install(app: App) {
    app.component('van-coupons', Coupon)
  }
}