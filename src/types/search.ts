import { CSSProperties } from "vue"

export interface SearchAttrs {
  style?: CSSProperties,
  placeholder?: string,
  maxLength?: number | string,
  shape?: 'ronde' | 'square'
  clearable?: boolean,
  background?: string,
  clearIcon?: string,
  showAction?: boolean,
  actionText?: string,
  disabled?: boolean,
  readonly?: boolean,
  error?: boolean,
  errorMessage?: string,
  inputAlign?: 'left' | 'center' | 'right',
  left?: string,
  action?: string,
  label?: string,
  leftIcon?: string,
  rightIcon?: string,
}


