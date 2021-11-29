import { CSSProperties } from 'vue'


export interface SubmitBarAttrs {
  style?: CSSProperties,
  price?: number,
  decimalLength?: number | string,
  label?: string,
  suffixLabel?: string,
  textAlign?: 'right' | 'left',
  buttonText?: string,
  buttonType?: 'default' | 'primary' | 'warning' | 'danger' | 'success',
  buttonColor?: string,
  tip?: string,
  currency?: string,
  disabled?: boolean,
  loading?: boolean,
  safeAreaInsetBottom?: boolean,
}