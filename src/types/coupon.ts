import { CSSProperties } from 'vue'


export interface CouponAttrs {
  style?: CSSProperties,
  background?: string,
  amount?: number | string,
  condition?: string,
  validity?: string,
  tips?: string
}