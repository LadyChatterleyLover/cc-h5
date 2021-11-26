import { CSSProperties } from "vue"

export interface InputAttrs {
  style?: CSSProperties,
  placeholder?: string,
  maxLength?: number | string,
  type?: 'text' | 'number' | 'password' | 'digit',
  label?: string,
  requireShow?: boolean,
  disabled?: boolean,
  readonly?: boolean,
  clearable?: boolean,
  textAlign?: 'left' | 'center' | 'right'
}