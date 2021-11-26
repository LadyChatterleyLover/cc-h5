import { CSSProperties } from 'vue'


export interface RateAttrs {
  style?: CSSProperties,
  value?: number,
  count?: number,
  iconSize?: number,
  activeColor?: string,
  voidColor?: string,
  uncheckedIcon?: string,
  checkedIcon?: string,
  allowHalf?: boolean,
  readonly?: boolean,
  disabled?: boolean,
  spacing?: number
}