import { CSSProperties } from 'vue'


export interface CellAttrs {
  style?: CSSProperties,
  title?: number | string,
  value?: number | string,
  label?: string,
  extra?: string,
  size?: '' | 'large',
  icon?: string,
  rightIcon?: string,
  url?: string,
  to?: string,
  border?: boolean,
  replace?: boolean,
  clickable?: boolean,
  isLink?: boolean,
  required?: boolean,
  center?: boolean,
  arrowDirection?: 'left' | 'right' | 'top' | 'down'
}