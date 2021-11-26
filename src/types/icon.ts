import { CSSProperties } from 'vue'


export interface IconAttrs {
  style?: CSSProperties,
  name?: string,
  color?: string,
  company?: 'px' | 'em' | 'rem',
  size: string | number
}