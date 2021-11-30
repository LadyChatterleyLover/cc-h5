import { CSSProperties } from 'vue'


export interface LoadingAttrs {
  style?: CSSProperties,
  color?: string,
  type?: 'circular' | 'spinner',
  size?: number | string,
  textSize?: number | string,
  textColor?: string,
  vertical?: boolean,
  text?: string
}