import { CSSProperties } from 'vue'

export interface PriceAttrs {
  style?: CSSProperties,
  price?: number,
  needSymbol?: boolean,
  symbol?: string,
  decimalDigits?: number,
  thousands?: boolean,
  position?: 'before' | 'after',
  size?: 'normal' | 'small' | 'large'
}