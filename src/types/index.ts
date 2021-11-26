import { InputAttrs } from "./input"
import { IconAttrs } from "./icon"
import { NavbarAttrs } from "./navbar"
import { NoticeBarAttrs } from "./noticeBar"
import { SearchAttrs } from "./searchbar"
import { SwiperAttrs } from './swiper'
import { VideoAttrs } from "./video"
import { ButtonAttrs } from './button'
import { AvatarAttrs } from './avatar'
import { DividerAttrs } from './divider'
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


export interface ComponentItem {
  type: 'button' | 'icon' | 'input' | 'searchbar' | 'swiper' | 'swiper-item' | 'rate' | 'noticebar'
  | 'video' | 'navbar' | 'avatar' | 'divider' | 'price' | 'tabbar' | 'tabbar-item' | 'tag'
  | 'progress' | 'circleprogress' | 'switch' | 'line' | 'bar' | 'pie' | 'funnel'
  | 'more' | 'goods-nav' | 'goods-action' | 'goods-card' | 'coupon' | 'contact-card'
  ,
  icon?: string,
  label?: string,
  value?: any,
  attrs: SearchAttrs | IconAttrs | InputAttrs | SwiperAttrs | NoticeBarAttrs | NavbarAttrs | VideoAttrs
  | ButtonAttrs | AvatarAttrs | DividerAttrs | PriceAttrs | TabbarAttrs | TagAttrs | RateAttrs
  | ProgressAttrs | CircleProgressAttrs | SwitchAttrs | LineAttrs | BarAttrs | PieAttrs | FunnelAttrs
  | MoreAttrs | GoodsNavAttrs | GoodsActionsAttrs | GoodsCardAttrs | CouponAttrs | ContactCardAttrs
  ,
  children?: ComponentItem[]
}