import { CSSProperties } from 'vue'

export interface Options {
  style?: CSSProperties,
  text?: string,
  iconSize?: number,
  iconColor?: string,
  icon?: string
}

export interface MoreAttrs {
  style?: CSSProperties,
  leftOptions?: Options,
  rightOptions?: Options,
}