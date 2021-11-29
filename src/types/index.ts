import { InputAttrs } from "./input"
import { TextareaAttrs } from "./textarea"
import { IconAttrs } from "./icon"
import { RadioAttrs } from './radio'
import { NavbarAttrs } from "./navBar"
import { NoticeBarAttrs } from "./noticeBar"
import { SearchAttrs } from "./search"
import { SwiperAttrs } from './swiper'
import { ButtonAttrs } from './button'
import { AvatarAttrs } from './avatar'
import { DividerAttrs } from './divider'
import { SliderAttrs } from "./slider"
import { PriceAttrs } from "./price"
import { TabbarAttrs } from './tabbar'
import { TagAttrs } from "./tag"
import { RateAttrs } from "./rate"
import { ProgressAttrs } from "./progress"
import { CircleProgressAttrs } from "./circleProgress"
import { SwitchAttrs } from "./switch"
import { LineAttrs } from "./line"
import { BarAttrs } from "./bar"
import { PieAttrs } from "./pie"
import { FunnelAttrs } from "./funnel"
import { MoreAttrs } from "./more"
import { GoodsNavAttrs } from "./goodsNav"
import { GoodsActionsAttrs } from "./goodsAction"
import { CouponAttrs } from "./coupon"
import { GoodsCardAttrs } from "./goodsCard"
import { ContactCardAttrs } from "./contactCard"
import { QrcodeAttrs } from "./qrcode"
import { StepperAttrs } from './stepper'
import { EmptyAttrs } from './empty'
import { SkeletonAttrs } from './skeleton'
import { PaginationAttrs } from './pagination'





export interface ComponentItem {
  type: 'button' | 'icon' | 'field' | 'textarea' | 'radio-group' | 'radio' | 'checkbox-group' | 'checkbox' |
  'search' | 'swipe' | 'swipe-item' | 'rate' | 'notice-bar' | 'stepper' | 'nav-bar' | 'slider' | 'avatar' | 'divider' | 'price' | 'tabbar' | 'tabbar-item' | 'tag'
  | 'progress' | 'circle' | 'empty' | 'pagination' | 'switch' | 'skeleton' | 'line' | 'bar' | 'pie' | 'funnel' | 'more'
  | 'goods-nav' | 'goods-action' | 'good-card' | 'coupons' | 'contact-card' | 'qrcode',
  icon?: string,
  label?: string,
  value?: any,
  field?: string,
  attrs: SearchAttrs | IconAttrs | InputAttrs | TextareaAttrs | RadioAttrs | SwiperAttrs | NoticeBarAttrs | NavbarAttrs
  | ButtonAttrs | AvatarAttrs | SliderAttrs | StepperAttrs | SkeletonAttrs | DividerAttrs | PriceAttrs | TabbarAttrs | TagAttrs | RateAttrs
  | ProgressAttrs | CircleProgressAttrs | EmptyAttrs | PaginationAttrs | SwitchAttrs | LineAttrs | BarAttrs | PieAttrs | FunnelAttrs
  | MoreAttrs | GoodsNavAttrs | GoodsActionsAttrs | GoodsCardAttrs | CouponAttrs | ContactCardAttrs
  | QrcodeAttrs,
  children?: ComponentItem[]
}