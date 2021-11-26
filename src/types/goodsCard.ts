import { CSSProperties } from 'vue'


export interface GoodsCardAttrs {
  style?: CSSProperties,
  // 左侧图片
  thumb?: string,
  // 标题
  title?: string
  // 描述
  desc?: string
  // 图片角标
  tag?: string
  // 商品数量
  num?: number | string
  // 商品价格
  price?: number | string
  // 商品划线原价
  originPrice?: number | string
  // 货币符号
  currency?: string,
  background?: string,
}