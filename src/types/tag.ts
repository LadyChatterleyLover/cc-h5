import { CSSProperties } from 'vue'

export interface TagAttrs {
  style?: CSSProperties,
  type?: 'default' | 'primary' | 'warning' | 'danger' | 'success',
  color?: string,
  textColor?: string,
  plain?: boolean,
  round?: boolean,
  mark?: boolean,
  closeable?: boolean,
  text?: string
}