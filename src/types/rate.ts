import { CSSProperties } from 'vue'


export interface RateAttrs {
  style?: CSSProperties,
  value?: number,
  count?: number,
  size?: number,
  color?: string,
  voidColor?: string,
  disabledColor?: string,
  icon?: string,
  voidIcon?: string,
  allowHalf?: boolean,
  readonly?: boolean,
  disabled?: boolean,
  touchable?: boolean,
  gutter?: number
}