import { CSSProperties } from 'vue'


export interface SliderAttrs {
  style?: CSSProperties,
  range?: boolean,
  max?: number | string,
  min?: number | string,
  step?: number | string,
  barHeight?: number | string,
  buttonSize?: number | string,
  activeColor?: string,
  inactiveColor?: string,
  disabled?: boolean,
  readonly?: boolean,
  vertical?: boolean
}