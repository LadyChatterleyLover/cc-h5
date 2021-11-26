import { CSSProperties } from 'vue'

export interface SwitchAttrs {
  style?: CSSProperties,
  value?: boolean,
  disable?: boolean,
  activeColor?: string,
  inactiveColor?: string,
  activeText?: string,
  inactiveText?: string,
}