import { CSSProperties } from 'vue'


export interface RangeAttrs {
  style?: CSSProperties,
  range?: boolean,
  max?: number | string,
  min?: number | string,
  step?: number | string,
  disabled?: boolean,
  hiddenRange?: boolean,
  hiddenTag?: boolean,
  activeColor?: string,
  inactiveColor?: string,
  buttonColor?: string,
}