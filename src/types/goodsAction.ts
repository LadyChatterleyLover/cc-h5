import { CSSProperties } from 'vue'

export interface GoodsActionOptionItem {
  text: string,
  icon: string,
  dot?: boolean,
  info?: string | number,
  iconColor?: string,
  infoColor?: string
}

export interface GoodsActionButtonItem {
  text: string,
  background?: string
}

export interface GoodsActionsAttrs {
  style?: CSSProperties,
  goodsActionOptions?: GoodsActionOptionItem[],
  goodsActionButton?: GoodsActionButtonItem[]
}