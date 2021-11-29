import { CSSProperties } from 'vue'

export interface SwitchAttrs {
  style?: CSSProperties,
  value?: boolean,
  disable?: boolean,
  loading?: boolean,
  size?: number | string,
  activeColor?: string,
  inactiveColor?: string,
  activeValue?: any,
  inactiveValue?: any,
}