import { CSSProperties } from "vue"

export interface SearchAttrs {
  style?: CSSProperties,
  placeholder?: string,
  maxLength?: number | string,
  inputType?: string,
  clearable?: boolean,
  background?: string,
  inputBackground?: string,
  leftin?: string,
  leftout?: string,
  rightin?: string,
  rightout?: string
}


