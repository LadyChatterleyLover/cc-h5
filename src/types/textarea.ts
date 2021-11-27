import { CSSProperties } from 'vue'


export interface TextareaAttrs {
  style?: CSSProperties,
  placeholder?: '',
  maxLength?: string | number,
  rows?: number | string,
  limitShow?: boolean,
  autosize?: boolean,
  textAlign?: 'left' | 'center' | 'right',
  readonly?: boolean,
  disabled?: boolean
}