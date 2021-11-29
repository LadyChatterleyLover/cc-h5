import { CSSProperties } from 'vue'

export interface TagAttrs {
  style?: CSSProperties,
  type?: 'default' | 'primary' | 'warning' | 'danger' | 'success',
  size?: 'medium' | 'medium' | 'large',
  color?: string,
  textColor?: string,
  plain?: boolean,
  round?: boolean,
  mark?: boolean,
  closeable?: boolean,
  text?: string
}