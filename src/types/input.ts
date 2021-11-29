import { CSSProperties } from "vue"

export interface InputAttrs {
  style?: CSSProperties,
  placeholder?: string,
  type?: 'text' | 'tel' | 'number' | 'password' | 'digit',
  size?: '' | 'large',
  maxlength?: number | string,
  border?: boolean,
  label?: string,
  required?: boolean,
  disabled?: boolean,
  colon?: boolean,
  readonly?: boolean,
  clearable?: boolean,
  isLink?: boolean,
  showWordLimit?: boolean,
  error?: boolean,
  errorMessage?: string,
  labelAlign?: 'left' | 'center' | 'right',
  inputAlign?: 'left' | 'center' | 'right',
  leftIcon?: string,
  rightIcon?: string,
}